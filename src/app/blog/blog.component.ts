import { Component, OnInit } from '@angular/core';
import {ArticleList} from './article-list';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  articleList = ArticleList;

  constructor() { }

  ngOnInit() {
  }

}
