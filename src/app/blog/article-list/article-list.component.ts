import { Component, OnInit, Input } from '@angular/core';
import {ArticleItem} from './common/article-item';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  @Input() articleList: ArticleItem[];

  activeIndex: number = null;

  constructor() {
  }

  ngOnInit() {
    for (const item of this.articleList) {
      item.first = true;
    }
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
