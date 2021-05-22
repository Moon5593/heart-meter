import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionBeginPage } from './session-begin.page';

const routes: Routes = [
  {
    path: '',
    component: SessionBeginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionBeginPageRoutingModule {}
