/**
 * Created by aman on 3/12/2018.
 */
import {Injectable} from '@angular/core';
import {CanLoad, Router, Route} from '@angular/router';
import {UserService} from '../user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EditGuard implements CanLoad {

  constructor(private userService: UserService, private router: Router) {
  }

  canLoad(route: Route): Observable<boolean> {
    return this.userService.checkStatus().map(status => {
        if (status['isLogin']) {
          this.userService.isLogin = status['isLogin'];
          this.userService.username = status['username'];
          return status['isLogin'];
        } else {
          this.router.navigateByUrl('/');
          return false;
        }


      }
    );
  }

}

