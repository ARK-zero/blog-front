import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserService} from './user.service';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

const PrimeNGModules = [
  InputTextModule,
  ButtonModule
];
const PrimeNGServices = [
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...PrimeNGModules
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [UserService]
})
export class UserModule {
}
