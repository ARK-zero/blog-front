import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogComponent} from './blog.component';
import {HeaderComponent} from './header/header.component';
import {ArticleListComponent} from './article-list/article-list.component';
import { ArticleEditeComponent } from './article-edite/article-edite.component';
import { ArticleContentComponent } from './article-content/article-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BlogComponent, HeaderComponent, ArticleListComponent, ArticleEditeComponent, ArticleContentComponent]
})
export class BlogModule {
}
