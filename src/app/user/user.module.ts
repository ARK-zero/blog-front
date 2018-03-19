import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RouterModule, Routes} from '@angular/router';

import {InputTextModule} from 'primeng/inputtext';
import {TooltipModule} from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';
import {UserListComponent} from './user-list/user-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

const PrimeNGModules = [
  InputTextModule,
  ButtonModule,
  TooltipModule
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...PrimeNGModules,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, RegisterComponent, UserListComponent],
  providers: []
})
export class UserModule {
}
