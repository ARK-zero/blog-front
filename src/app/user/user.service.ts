import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/components/common/messageservice';
import {User} from './common/user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService) {
  }

  login(user: User): Observable<boolean> {
    const url = '/user/login';
    return this.http.post(url, user)
      .map((res) => res['login'])
      .catch(err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Login Message',
          detail: 'Network Error'
        });
        throw err.message;
      });
  }

  register(user: User): Observable<boolean> {
    const url = '/user/register';
    return this.http.post(url, user)
      .map((res) => res['register'])
      .catch(err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Register Message',
          detail: 'Network Error'
        });
        throw err.message;
      });
  }

  logout() {
    const url = '/user/logout';
    this.http.post(url, null).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }

  hasUser(username: string): Observable<boolean | string> {
    const url = '/user/hasUser';
    return this.http.post(url, {username: username})
      .map((res) => res['hasUser']);
  }


}
