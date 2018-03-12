import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {TooltipModule} from 'primeng/tooltip';

import {BlogComponent} from './blog.component';
import {HeaderComponent} from './header/header.component';
import {ArticleListComponent} from './article/article-list/article-list.component';
import {ArticleEditeComponent} from './article/article-edite/article-edite.component';
import {ArticleContentComponent} from './article/article-content/article-content.component';
import {ListItemComponent} from './article/article-list/list-item/list-item.component';

import {ArticleService} from './services/article.service';

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
  {path: ':author', component: BlogComponent, children: [
    {path: ':articleId', component: ArticleContentComponent}
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...PrimeNGModules
  ],
  declarations: [...BlogComponents],
  providers: [
    ArticleService
  ]
})
export class BlogModule {
}
