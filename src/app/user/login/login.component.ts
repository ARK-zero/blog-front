import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    });
  }

  login() {
    this.userService.login(this.loginForm.value)
      .subscribe((success) => {
        if (success) {
          this.messageService.add({
            severity: 'success',
            summary: 'Login Message',
            detail: 'Login Success, Welcome Back'
          });
          this.userService.isLogin = true;
          this.userService.username = this.loginForm.value.username;
          this.router.navigateByUrl(`/author/${this.userService.username}`);
        } else {
          this.messageService.add({
            severity: 'warn',
            summary: 'Login Message',
            detail: 'Account Info Not Match'
          });
          this.loginForm.reset();
        }
      });
  }

  goRegister() {
    this.router.navigateByUrl('/register');
  }

  goBack() {
    window.history.back();
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

}
