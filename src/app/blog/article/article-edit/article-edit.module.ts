import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ArticleEditComponent} from './article-edit.component';

const PrimengModules = [
  DropdownModule,
  ButtonModule,
  InputTextModule
];

const routes: Routes = [
  {path: '', component: ArticleEditComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ...PrimengModules
  ],
  declarations: [ArticleEditComponent],
  providers: []
})
export class ArticleEditModule {
}

