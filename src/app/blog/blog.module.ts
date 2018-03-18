import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TooltipModule} from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

import {BreviaryModule, ArticleBreviaryComponent} from './breviary';

import {BlogAuthorComponent} from './blog-author/blog-author.component';
import {HeaderComponent} from './header/header.component';
import {ListItemComponent, ArticleContentComponent, ArticleEditComponent, ArticleListComponent} from './article';
import {ArticleService} from './services/article.service';
import {DropdownDirective} from './header/directive/dropdown.directive';
import {BlogComponent} from './blog/blog.component';

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
  ArticleEditComponent,
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
          {path: 'edit', component: ArticleEditComponent}
        ]
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    BreviaryModule,
    ReactiveFormsModule,
    ...PrimeNGModules
  ],
  declarations: [...BlogComponents, DropdownDirective],
  providers: [
    ArticleService,
    ConfirmationService
  ]
})
export class BlogModule {
}
