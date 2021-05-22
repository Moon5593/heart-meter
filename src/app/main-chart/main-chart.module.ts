import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainChartPageRoutingModule } from './main-chart-routing.module';
import { MainChartPage } from './main-chart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainChartPageRoutingModule
  ],
  declarations: [MainChartPage]
})
export class MainChartPageModule {}
