import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MessageService} from 'primeng/components/common/messageservice';
import {GrowlModule} from 'primeng/growl';
import {ScrollPanelModule} from 'primeng/scrollpanel';

import {AppComponent} from './app.component';
import {UserModule, LoginComponent, RegisterComponent, UserListComponent} from './user';
import {BreviaryModule, ArticleBreviaryComponent} from './blog/breviary';

import {LoginGuard} from './auth-guards';

const PrimeNGModules = [
  GrowlModule,
  ScrollPanelModule
];
const PrimeNGServices = [
  MessageService
];

const Guards = [
  LoginGuard
];

const routes: Routes = [
  {path: '', component: ArticleBreviaryComponent},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [LoginGuard]},
  {path: 'author', loadChildren: './blog/blog.module#BlogModule'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    UserModule,
    BreviaryModule,
    ...PrimeNGModules
  ],
  providers: [
    ...PrimeNGServices,
    ...Guards
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {
}
