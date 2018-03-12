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
    this.router.navigateByUrl('/login');
  }

  goRegister() {
    this.router.navigateByUrl('/register');
  }

  logout() {
    this.userService.logout();
  }
}
