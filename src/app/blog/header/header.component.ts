import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public userService: UserService) {
  }

  ngOnInit() {
  }

  goLogin() {
    this.router.navigateByUrl('/user/login');
  }

  goRegister() {
    this.router.navigateByUrl('/user/register');
  }

  logout() {
    this.userService.logout();
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

  goEdit() {
    this.router.navigateByUrl(`/author/${this.userService.username}/edit`);
  }

  goUser() {
    this.router.navigateByUrl(`/author/${this.userService.username}`);
  }
}
