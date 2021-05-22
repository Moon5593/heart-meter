import { Component } from '@angular/core';
import { SessionBeginPage } from '../session-begin/session-begin.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public rootPage: any = SessionBeginPage;

  constructor() {}
}
