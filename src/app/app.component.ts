import {Component} from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>
  <p-growl [life]="5000"></p-growl>`
})
export class AppComponent {

  constructor() {}

}
