import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {ArticleService} from '../../services';
import {Article} from '../common/article';
import {UserService} from '../../../user';

import 'rxjs/add/operator/switchMap';
import {Subscription} from 'rxjs/Subscription';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent implements OnInit, OnDestroy {

  activatedRouteSubscription: Subscription;

  article: Article;

  constructor(private articleService: ArticleService,
              private activatedRoute: ActivatedRoute,
              public userService: UserService,
              private router: Router,
              private domSanitizer: DomSanitizer) {
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
        console.log(this.article.content);
        this.article.content = this.domSanitizer.bypassSecurityTrustHtml(article.content);
      });
  }

  edit() {
    this.router.navigateByUrl(`/author/${this.userService.username}/edit?articleId=${this.article._id}`);
  }

}
