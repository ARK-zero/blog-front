import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserService} from './user.service';
import {RouterModule} from '@angular/router';

import {InputTextModule} from 'primeng/inputtext';
import {TooltipModule} from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';
import { UserListComponent } from './user-list/user-list.component';

const PrimeNGModules = [
  InputTextModule,
  ButtonModule,
  TooltipModule
];
const PrimeNGServices = [
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...PrimeNGModules,
    RouterModule
  ],
  declarations: [LoginComponent, RegisterComponent, UserListComponent],
  providers: [UserService]
})
export class UserModule {
}
