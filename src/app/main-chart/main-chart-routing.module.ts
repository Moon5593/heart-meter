import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainChartPage } from './main-chart.page';

const routes: Routes = [
  {
    path: '',
    component: MainChartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainChartPageRoutingModule {}
