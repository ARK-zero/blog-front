import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {TooltipModule} from 'primeng/tooltip';

import {BlogComponent} from './blog.component';
import {HeaderComponent} from './header/header.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleEditeComponent} from './article-edite/article-edite.component';
import {ArticleContentComponent} from './article-content/article-content.component';
import {ListItemComponent} from './article-list/list-item/list-item.component';

const PrimeNGModules = [
  TooltipModule
];

const BlogComponents = [
  BlogComponent,
  HeaderComponent,
  ArticleListComponent,
  ArticleEditeComponent,
  ArticleContentComponent,
  ListItemComponent
];

const routes: Routes = [
  {path: '', component: BlogComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...PrimeNGModules
  ],
  declarations: [...BlogComponents]
})
export class BlogModule {
}
