/**
 * Created by aman on 3/12/2018.
 */
import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from '../user';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {
  }

  canActivate() {
    return this.userService.checkStatus().map(status => {
        if (status['isLogin']) {
          this.userService.isLogin = status['isLogin'];
          this.userService.username = status['username'];
          this.router.navigateByUrl('/');
        }
        return !status['isLogin'];
      }
    );
  }

}

