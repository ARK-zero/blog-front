import {Component, OnDestroy, OnInit, Optional} from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {ArticleService} from '../../services';
import {Article} from '../common/article';
import {UserService} from '../../../user';
import {BlogAuthorComponent} from '../../blog-author/blog-author.component';
import {ConfirmationService} from 'primeng/api';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import {Subscription} from 'rxjs/Subscription';
import {DomSanitizer, Title} from '@angular/platform-browser';

declare const Prism: any;
declare const $: any;

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent implements OnInit, OnDestroy {

  activatedRouteSubscription: Subscription;

  article: Article;

  constructor(private articleService: ArticleService,
              private messageService: MessageService,
              private activatedRoute: ActivatedRoute,
              public userService: UserService,
              private router: Router,
              public docTitle: Title,
              private confirmationService: ConfirmationService,
              private domSanitizer: DomSanitizer,
              @Optional() public blogAuthorComponent: BlogAuthorComponent) {
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
        if (article) {
          this.docTitle.setTitle(`${article.title}`);
          this.article = article;
          this.article.content = this.domSanitizer.bypassSecurityTrustHtml(article.content);

          setTimeout(() => {
            $('pre').addClass('line-numbers');
            Prism.highlightAll();
          }, 100);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Article Message',
            detail: `The article you looking for was noExisted`
          });
          this.router.navigateByUrl('/');
        }
      });
  }

  edit() {
    this.router.navigateByUrl(`/author/${this.userService.username}/edit?articleId=${this.article._id}`);
  }

  deleteArticle() {
    this.articleService.deleteArticle(this.article._id)
      .subscribe((res) => {
        if (res['delete']) {
          this.messageService.add({
            severity: 'success',
            summary: 'Article Message',
            detail: `删除成功`
          });
          this.blogAuthorComponent.updateArticleList(this.userService.username);
          this.router.navigateByUrl(`/author/${this.userService.username}`);
        } else {
          this.messageService.add({
            severity: 'warn',
            summary: 'Article Message',
            detail: `服务器错误，删除失败`
          });
        }
      });
  }

  deleteConfirm() {
    this.confirmationService.confirm({
      message: '确定删除?',
      header: 'Confirmation',
      icon: 'fa fa-exclamation-circle',
      accept: () => {
        this.deleteArticle();
      },
      reject: () => {}
    });
  }
}
