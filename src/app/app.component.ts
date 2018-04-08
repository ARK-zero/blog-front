import {Component} from '@angular/core';
import {UserService} from './user';

@Component({
  selector: 'app-root',
  template: `
      <router-outlet></router-outlet>
      <p-growl [life]="2000"></p-growl>
    		 	<div class="beian">
            <span>Copyright © 2018 - 2018  pengfeilin.cn 版权所有</span>
            <span>浙ICP备18012224号-1</span>
		 		<a target="_blank" 
           href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010802009018">
          <img src="assets/images/beian.png" style="float:left;"/>
          <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">浙公网安备 33010802009018号</p></a>
		 	</div>
  `
})
export class AppComponent {

  constructor(private userService: UserService) {
    this.userService.checkStatus().subscribe(status => {
      this.userService.username = status['username'];
      this.userService.isLogin = status['isLogin'];
    });
  }

}
