import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {MessageService} from 'primeng/components/common/messageservice';

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
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    });
  }

  register() {
    this.userService.register(this.registerForm.value).subscribe((success) => {
      if (success) {
        this.messageService.add({
          severity: 'success',
          summary: 'Login Message',
          detail: 'Login Success, Welcome Back'
        });
        this.registerForm.reset();
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: 'Login Message',
          detail: 'Account Info Not Match'
        });
        this.registerForm.reset();
      }
    });
  }

  goLogin() {
    this.router.navigateByUrl('/login');
  }


}
