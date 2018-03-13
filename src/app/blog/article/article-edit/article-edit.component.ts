import {Component, ElementRef, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {Article} from '../common/article';
import {ArticleService} from '../../services';
import {UserService} from '../../../user';

import 'rxjs/add/operator/switchMap';
import {DOCUMENT} from '@angular/platform-browser';

// declare let ClassicEditor: any;

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

  ClassicEditor: any;
  ckeditor = window['CKEDITOR'];
  constructor(private messageService: MessageService,
              private articleService: ArticleService,
              private userService: UserService,
              private router: Router,
              private _renderer2: Renderer2,
              @Inject(DOCUMENT) private _document,
              private activatedRoute: ActivatedRoute) {
    this.article = new Article();
  }

  ngOnInit() {
    this.editorInit();
    this.getClassification();
    this.author = this.userService.username;

    console.log(this.activatedRoute.snapshot.queryParams['articleId']);
    if (this.activatedRoute.snapshot.queryParams['articleId']) {
      this.activatedRoute.queryParams
        .switchMap((params) => this.articleService.getArticle(params.articleId))
        .subscribe((article) => {
          this.title = article.title;
          this.classification = article.classification;
          this.ckeditor.instances.editor.setData(article.content);
          // this.ClassicEditor.setData(article.content);
          this.article = article;
        });
    }
  }

  getClassification() {
    this.articleService.getClassification(this.userService.username).subscribe((classifyInfo) => {
      this.classifyInfo = classifyInfo;
    });
  }

  editorInit() {
    // ClassicEditor
    //   .create(this.editor.nativeElement)
    //   .then((editor) => {
    //     this.ClassicEditor = editor;
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    // ClassicEditor.CKEDITOR.replace(this.editor.nativeElement);
    // CKEDITOR.replace(this.editor.nativeElement);
    console.log(this.ckeditor)
    this.ckeditor.replace('editor',{extraPlugins: 'codesnippet',codeSnippet_theme: 'zenburn'});
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
    // this.article.content = this.ClassicEditor.getData() || '';
    this.article.content = this.ckeditor.instances.editor.getData() || '';
    console.log(this.article)
    this.articleService.saveArticle(this.article).subscribe((response) => {
      console.log(response)
      if (response['_id']) {
        this.messageService.add({
          severity: 'success',
          summary: 'Article Message',
          detail: `Saved Success`
        });
        this.router.navigateByUrl(`/author/${this.userService.username}/article/${response['_id']}`);
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
