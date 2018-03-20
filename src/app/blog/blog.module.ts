import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes, CanLoad} from '@angular/router';

import {TooltipModule} from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

import {BreviaryModule, ArticleBreviaryComponent} from './breviary';

import {BlogAuthorComponent} from './blog-author/blog-author.component';
import {HeaderComponent} from './header/header.component';
import {ListItemComponent, ArticleContentComponent, ArticleListComponent} from './article';
import {ArticleService} from './services/article.service';
import {DropdownDirective} from './header/directive/dropdown.directive';
import {BlogComponent} from './blog/blog.component';

import {EditGuard} from '../_guards';

const PrimeNGModules = [
  TooltipModule,
  ButtonModule,
  InputTextModule,
  DropdownModule,
  ConfirmDialogModule
];

const BlogComponents = [
  BlogAuthorComponent,
  HeaderComponent,
  ArticleListComponent,
  ArticleContentComponent,
  ListItemComponent,
  BlogComponent
];

const routes: Routes = [
  {
    path: '', component: BlogComponent,
    children: [
      {path: '', component: ArticleBreviaryComponent},
      {
        path: 'author/:author', component: BlogAuthorComponent,
        children: [
          {path: '', component: ArticleBreviaryComponent},
          {path: 'article/:articleId', component: ArticleContentComponent},
          {path: 'edit', loadChildren: './article/article-edit/article-edit.module#ArticleEditModule', canLoad: [EditGuard]}
        ]
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BreviaryModule,
    ...PrimeNGModules
  ],
  declarations: [...BlogComponents, DropdownDirective],
  providers: [
    ArticleService,
    ConfirmationService,
    EditGuard
  ]
})
export class BlogModule {
}
