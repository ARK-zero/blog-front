import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ArticleBreviaryComponent} from './article-breviary.component';
import {ArticleBreviaryItemComponent} from './article-breviary-item/article-breviary-item.component';
import {ArticleService} from '../services';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ArticleBreviaryComponent,
    ArticleBreviaryItemComponent
  ],
  exports: [
    ArticleBreviaryComponent,
    ArticleBreviaryItemComponent
  ],
  providers: [ArticleService]
})
export class BreviaryModule {
}
