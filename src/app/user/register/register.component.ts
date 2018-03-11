import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {MessageService} from 'primeng/components/common/messageservice';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.pattern(/^[\u4e00-\u9fa5\w\d]{2,8}$/)
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^[\w\d!@#$%^&*]{6,16}$/)
      ]],
      inviteCode: ['', [
        Validators.required
      ]]
    });

    this.registerForm.controls.username.valueChanges
      .debounceTime(1000)
      .switchMap((value) => this.userService.hasUser(value))
      .subscribe((user) => {
        if (user) {
          this.messageService.add({
            severity: 'warn',
            summary: 'Register Message',
            detail: `Account:${user} Already Exist`
          });
        }
      });
  }

  register() {
    this.userService.register(this.registerForm.value).subscribe((success) => {
      if (success) {
        this.messageService.add({
          severity: 'success',
          summary: 'Register Message',
          detail: 'SignUp Success, Welcome Back'
        });
        this.registerForm.reset();
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: 'Register Message',
          detail: 'SignUp Fail'
        });
        this.registerForm.reset();
      }
    });
  }

  goLogin() {
    this.router.navigateByUrl('/login');
  }

  goBack() {
    window.history.back();
  }

}
