import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MessageService} from 'primeng/components/common/messageservice';
import {GrowlModule} from 'primeng/growl';

import {AppComponent} from './app.component';
import {UserModule, LoginComponent, RegisterComponent} from './user';

const PrimeNGModules = [
  GrowlModule
];
const PrimeNGServices = [
  MessageService
];

const FeatureModule = [
  UserModule
];

const routes: Routes = [
  {path: '', loadChildren: './blog/blog.module#BlogModule'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ...FeatureModule,
    ...PrimeNGModules
  ],
  providers: [
    ...PrimeNGServices
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {
}
