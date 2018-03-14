import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/components/common/messageservice';
import {Article} from '../article/common/article';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService) {
  }

  getArticleList(author: string): Observable<any> {
    const url = '/article/articleList';
    return this.http.post(url, {author: author}).catch((err) => {
      throw err.message;
    });
  }

  getArticle(articleId): Observable<any> {
    const url = '/article/getArticle';
    return this.http.post(url, {articleId: articleId}).catch((err) => {
      throw err.message;
    });
  }

  getClassifications(author): Observable<any> {
    const url = '/article/getClassification';
    return this.http.post(url, {author: author}).catch((err) => {
      throw err.message;
    });
  }

  saveArticle(article: Article) {
    const url = '/article/save';
    return this.http.post(url, article)
      .catch((err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Article Message',
          detail: `Network Error`
        });
      throw err.message;
    });
  }

}
