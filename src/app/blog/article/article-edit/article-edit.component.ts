import {Component, ElementRef, Inject, OnInit, Renderer2, ViewChild, Optional} from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {Article} from '../common/article';
import {ArticleService} from '../../services';
import {UserService} from '../../../user';
import {BlogComponent} from '../../blog.component';

import 'rxjs/add/operator/switchMap';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  @ViewChild('editor') editor: ElementRef;

  article: Article;

  author: string;
  title: string;
  content: string;
  classification: any;
  classifyInfo: Array<any>;

  articleId: string;

  ckeditor = window['CKEDITOR'];

  constructor(private messageService: MessageService,
              private articleService: ArticleService,
              private userService: UserService,
              private router: Router,
              private _renderer2: Renderer2,
              @Inject(DOCUMENT) private _document,
              private activatedRoute: ActivatedRoute,
              @Optional() public blogComponent: BlogComponent
  ) {
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
          this.title = article.title;
          this.classification = article.classification;
          this.articleId = article._id;
          this.article = article;
          this.ckeditor.instances.editor.setData(article.content);

          console.log(article.content);
        });
    }
  }

  getClassifications() {
    this.articleService.getClassifications(this.userService.username).subscribe((classifyInfo) => {
      this.classifyInfo = classifyInfo;
    });
  }

  editorInit() {
    this.ckeditor.replace('editor', {
      extraPlugins: 'codesnippet,codemirror',
      codeSnippet_theme: 'monokai_sublime',
      height: 356,
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
    this.article.content = this.ckeditor.instances.editor.getData() || '';
    console.log(this.article.content);
    this.articleService.saveArticle(this.article).subscribe((response) => {
      if (response['_id']) {
        this.messageService.add({
          severity: 'success',
          summary: 'Article Message',
          detail: `Saved Success`
        });
        this.router.navigateByUrl(`/author/${this.userService.username}/article/${response['_id']}`);
        this.blogComponent.updateArticleList(this.userService.username);
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
