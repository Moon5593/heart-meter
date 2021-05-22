import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import {delay} from 'rxjs/operators';
import * as HighCharts from 'highcharts';
import { AppStateService } from './app-state.service';

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.page.html',
  styleUrls: ['./main-chart.page.scss'],
})
export class MainChartPage implements OnInit {
  myChart;
  random_num=0;
  table_data=[];
  itvl_runner;

  constructor(
    private http: HttpClient, 
    private alertCtrl: AlertController, 
    private appState: AppStateService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
    ) {}

  ngOnInit() {}

  ionViewDidEnter(){
    this.appState.fetchRecords()
    .subscribe(response=>{
      for(let key in response){
        if(response.hasOwnProperty(key)){
          //console.log(response[key]);
          this.table_data.push(response[key]);
        }
      }
    },
    err=>{
      this.stopSession();
      this.showAlert('Please check your network connection.');
    });
    
    this.myChart = HighCharts.chart('container', {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Heart rate meter'
      },
      credits:{
        enabled: false
      },
      tooltip: {
        xDateFormat: '%b %d, %Y',
        headerFormat: 'Date: <b>{point.key}</b><br />',
        pointFormat: 'Number: <b>{point.y}</b>'
      },
      xAxis: {
        title: {
          text: 'time'
        },
        type: 'datetime',
        labels:{
          formatter: function(){
            //let currentDate = new Date().getTime() + (5*60*60*1000 + 30*60*1000);
            return HighCharts.dateFormat('%H:%M:%S', +this.value);
          }
        }
      },
      yAxis: {
        title: {
          text: 'number'
        }
      },
      series: [{
        name: 'Chart flow',
        type: undefined,
        data: [[new Date().getTime() + (5*60*60*1000 + 30*60*1000), 0]]
      }]
    });

    let data = [];
    this.itvl_runner = setInterval(()=>{
      if(data.length ===  30){
        data = [];
      }
      this.random_num = Math.floor(Math.random() * (9 - 0 + 1) + 0);
      data.push([new Date().getTime() + (5*60*60*1000 + 30*60*1000), this.random_num]);
      this.myChart.series[0].update({
        data: data
      }, true);
      if(this.random_num === 7){
        let obj = {data: this.random_num, time: formatDate(new Date().getTime(), 'hh:mm:ss a', 'en-US', '+0530')};
        this.appState.postRecords(obj)
        .subscribe(()=>{},
        err=>{
          this.stopSession();
          this.showAlert('Please check your network connection.');
        });
        this.table_data.push(obj);
        this.myChart.series[0].data[data.length-1].update({
          data: 7,
          marker: {
            fillColor: 'red'
          }
        }, true);
      }

    }, 2000);
  }

  showAlert(message: string){
    this.alertCtrl
      .create({
        header: 'Network Error',
        message: message,
        buttons: ['Okay']
      })
      .then(alertEl => alertEl.present());
  }

  clearRecords(){
    this.loadingCtrl.create({message: 'Deleting records...'}).then(loadingEl=>{
      loadingEl.present();
      this.appState.deleteRecords().
      pipe(delay(1000))
      .subscribe(()=>{
        this.table_data = [];
        this.stopSession();
        loadingEl.dismiss();
        this.toastCtrl.create({message: 'Records deleted successfully!', duration: 1000})
        .then(toastEl=>{
          toastEl.present();
        });
      },
      err=>{
        loadingEl.dismiss();
        this.stopSession();
        this.showAlert('Failed to delete, please check your network connection.');
      });
    });
  }

  stopSession(){
    clearInterval(this.itvl_runner);
  }

  ionViewDidLeave(){
    console.log('leaving main chart page');
    clearInterval(this.itvl_runner);
  }

}
