import {Component, ElementRef, OnInit, ViewChild, Optional, OnDestroy} from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {Article} from '../common/article';
import {ArticleService} from '../../services';
import {UserService} from '../../../user';
import {BlogAuthorComponent} from '../../blog-author/blog-author.component';
import {TinymceConfig} from '../../../_config';

import 'rxjs/add/operator/switchMap';

declare const tinymce: any;

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit, OnDestroy {

  @ViewChild('editor') textarea: ElementRef;

  article: Article;

  author: string;
  title: string;
  classification: any;
  classifyInfo: Array<any>;

  articleId: string;
  editor: any;

  constructor(private messageService: MessageService,
              private articleService: ArticleService,
              private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              @Optional() public blogAuthorComponent: BlogAuthorComponent) {
    this.article = new Article();
  }

  ngOnInit() {
    this.editorInit();
    this.getClassifications();
    this.author = this.userService.username;

    if (this.activatedRoute.snapshot.queryParams['articleId']) {
      this.activatedRoute.queryParams
        .switchMap((params) => this.articleService.getArticle(params.articleId))
        .subscribe((article) => {
          this.article = article;
          this.title = article.title;
          this.classification = article.classification;
          this.articleId = article._id;
          this.editor.setContent(article.content);
        });
    }
  }

  ngOnDestroy() {
  }

  editorInit() {
    const config =  Object.assign(TinymceConfig, {
      target: this.textarea.nativeElement,
      setup: editor => {
        this.editor = editor;
      }
    });
    tinymce.init(config);
  }

  getClassifications() {
    this.articleService.getClassifications(this.userService.username).subscribe((classifyInfo) => {
      this.classifyInfo = classifyInfo;
    });
  }

  submit() {
    if (!this.title) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Article Message',
        detail: `Title Can't Be Empty`
      });
      return;
    }

    if (!this.classification) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Article Message',
        detail: `Choose One Classification`
      });
      return;
    }

    this.article.title = this.title;
    this.article.author = this.author;
    this.article.classification = this.classification._id || this.classification;
    this.article.content = this.editor.getContent();
    this.article.updatedAt = new Date();
    this.articleService.saveArticle(this.article).subscribe((response) => {
      if (response['_id']) {
        this.messageService.add({
          severity: 'success',
          summary: 'Article Message',
          detail: `Saved Success`
        });
        this.router.navigateByUrl(`/author/${this.userService.username}/article/${response['_id']}`);
        this.blogAuthorComponent.updateArticleList(this.userService.username);
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: 'Article Message',
          detail: `Saved Fail`
        });
      }
    });
  }


}
