import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SessionBeginPage } from './session-begin.page';
import { SessionBeginPageRoutingModule } from './session-begin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionBeginPageRoutingModule
  ],
  declarations: [SessionBeginPage],
  exports: [SessionBeginPage]
})
export class SessionBeginPageModule {}
