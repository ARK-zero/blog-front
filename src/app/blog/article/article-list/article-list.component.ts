import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import {ArticleItem} from './common/article-item';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  @Input() articleList: ArticleItem[];
  @Input() isLoading: boolean;
  activeIndex: number = null;

  constructor() {
  }

  ngOnInit() {
  }

  expandToggle(index) {
    if (!this.articleList[index].expanded) {
      this.articleList.forEach(item => item.expanded = false);
      this.articleList[index].expanded = true;
      this.activeIndex = index;
    } else {
      this.articleList[index].expanded = false;
      this.activeIndex = null;
    }
  }
}
