import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {TooltipModule} from 'primeng/tooltip';

import {BlogComponent} from './blog.component';
import {HeaderComponent} from './header/header.component';
import {ArticleListComponent} from './article/article-list/article-list.component';
import {ArticleEditComponent} from './article/article-edit/article-edit.component';
import {ArticleContentComponent} from './article/article-content/article-content.component';
import {ListItemComponent} from './article/article-list/list-item/list-item.component';

import {ArticleService} from './services/article.service';
import { DropdownDirective } from './header/directive/dropdown.directive';

const PrimeNGModules = [
  TooltipModule
];

const BlogComponents = [
  BlogComponent,
  HeaderComponent,
  ArticleListComponent,
  ArticleEditComponent,
  ArticleContentComponent,
  ListItemComponent
];

const routes: Routes = [
  {path: ':author', component: BlogComponent, children: [
    {path: 'article/:articleId', component: ArticleContentComponent},
    {path: 'edit', component: ArticleEditComponent}
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...PrimeNGModules
  ],
  declarations: [...BlogComponents, DropdownDirective],
  providers: [
    ArticleService
  ]
})
export class BlogModule {
}
