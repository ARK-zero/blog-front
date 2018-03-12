import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../services';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent implements OnInit {

  article: any;

  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.initPage();
  }

  initPage() {
    this.activatedRoute.params
      .switchMap((params) => this.articleService.getArticle(params.articleId))
      .subscribe((article) => {
        this.article = article;
      });
  }

}
