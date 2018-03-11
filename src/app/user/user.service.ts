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
      .map((value) => value['login'])
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
      .map((value) => value['register'])
      .catch(err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Register Message',
          detail: 'Network Error'
        });
        throw err.message;
      });
  }


}
