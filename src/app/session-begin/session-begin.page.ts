import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-session-begin',
  templateUrl: './session-begin.page.html',
  styleUrls: ['./session-begin.page.scss'],
})
export class SessionBeginPage implements OnInit {

  constructor(private navCtrl: NavController, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  sessionActivate(){
    this.navCtrl.navigateForward('/home/main-chart');
  }

}
