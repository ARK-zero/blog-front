import {Component, OnInit} from '@angular/core';
import {ArticleService} from './services';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  articleList: any;

  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getArticleList();
  }

  getArticleList() {
    this.activatedRoute.params
      .switchMap((params) => this.articleService.getArticleList(params.author))
      .subscribe((articleList) => {
        for (const item of articleList) {
          item.first = true;
        }
        this.articleList = articleList;
      });
  }

  updateArticleList(author) {
    this.articleService.getArticleList(author)
      .subscribe((articleList) => {
      for (const item of articleList) {
        item.first = true;
      }
      this.articleList = articleList;
    });
  }

}
