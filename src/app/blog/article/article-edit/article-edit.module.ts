import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ArticleEditComponent} from './article-edit.component';

import {TooltipModule} from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
// import {ConfirmDialogModule} from 'primeng/confirmdialog';
// import {ConfirmationService} from 'primeng/api';

const PrimeNGModules = [
  TooltipModule,
  ButtonModule,
  InputTextModule,
  DropdownModule,
  // ConfirmDialogModule
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
    PrimeNGModules
  ],
  declarations: [ArticleEditComponent],
  providers: []
})
export class ArticleEditModule {
}
