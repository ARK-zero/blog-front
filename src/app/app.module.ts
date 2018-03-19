import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {MessageService} from 'primeng/components/common/messageservice';
import {GrowlModule} from 'primeng/growl';
import {ScrollPanelModule} from 'primeng/scrollpanel';

import {AppComponent} from './app.component';
import {UserService} from './user';

import {LoginGuard} from './_guards';
import {BlogComponent} from './blog/blog/blog.component';
import {BlogModule} from './blog/blog.module';

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
  {path: 'user', loadChildren: './user/user.module#UserModule'},
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
    ...PrimeNGModules,
    HttpClientModule,
    BlogModule
  ],
  providers: [
    ...PrimeNGServices,
    ...Guards,
    UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {
}
