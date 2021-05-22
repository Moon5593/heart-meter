import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'main-chart',
    loadChildren: () => import('./../main-chart/main-chart.module').then( m => m.MainChartPageModule)
  },
  {
    path: 'session-begin',
    loadChildren: () => import('./../session-begin/session-begin.module').then( m => m.SessionBeginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
