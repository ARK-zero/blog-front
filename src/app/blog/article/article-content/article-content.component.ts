import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../services';

import 'rxjs/add/operator/switchMap';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent implements OnInit, OnDestroy {

  activatedRouteSubscription: Subscription;

  article: any;

  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.initPage();
  }

  ngOnDestroy() {
    this.activatedRouteSubscription.unsubscribe();
  }

  initPage() {
    this.activatedRouteSubscription = this.activatedRoute.params
      .switchMap((params) => this.articleService.getArticle(params.articleId))
      .subscribe((article) => {
        this.article = article;
      });
  }

}
