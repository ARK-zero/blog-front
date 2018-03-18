import {Component, Input, OnInit, Renderer2} from '@angular/core';
import {Article} from '../../article/common/article';

@Component({
  selector: 'app-article-breviary-item',
  templateUrl: './article-breviary-item.component.html',
  styleUrls: ['./article-breviary-item.component.scss']
})
export class ArticleBreviaryItemComponent implements OnInit {

  @Input('breviary') breviary: Article;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

}
