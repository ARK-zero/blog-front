import {Component} from '@angular/core';
import {UserService} from './user';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>
  <p-growl [life]="2000"></p-growl>`
})
export class AppComponent {

  constructor(private userService: UserService) {
    this.userService.checkStatus().subscribe(status => {
      this.userService.username = status['username'];
      this.userService.isLogin = status['isLogin'];
    });
  }

}
