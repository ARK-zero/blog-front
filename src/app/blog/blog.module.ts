import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TooltipModule} from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';

import {BlogComponent} from './blog.component';
import {HeaderComponent} from './header/header.component';
import {ListItemComponent, ArticleContentComponent, ArticleEditComponent, ArticleListComponent} from './article';
import {ArticleService} from './services/article.service';
import {DropdownDirective} from './header/directive/dropdown.directive';

const PrimeNGModules = [
  TooltipModule,
  ButtonModule,
  InputTextModule,
  DropdownModule
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
  {
    path: ':author', component: BlogComponent, children: [
    {path: 'article/:articleId', component: ArticleContentComponent},
    {path: 'edit', component: ArticleEditComponent}
  ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ...PrimeNGModules
  ],
  declarations: [...BlogComponents, DropdownDirective],
  providers: [
    ArticleService
  ]
})
export class BlogModule {
}
