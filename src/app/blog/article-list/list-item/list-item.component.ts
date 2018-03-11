import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {ArticleItem} from '../common/article-item';

@Component({
  selector: '[app-list-item]',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  animations: [
    trigger('expand', [
      state('visible', style({height: '*'})),
      state('hidden', style({height: 0})),
      transition('hidden => visible', animate('200ms ease-out')),
      transition('visible => hidden', animate('200ms ease-out'))
    ])
  ]
})
export class ListItemComponent implements OnInit {

  @Output() expandToggle: EventEmitter<any> = new EventEmitter;

  @Input() parent: ArticleItem;

  @Input() articleItem: ArticleItem;

  @Input() index: number;

  constructor() {
  }

  ngOnInit() {
    this.articleItem.parent = this.parent;
  }

  expand() {
    if (this.articleItem.first) {
      this.expandToggle.emit(this.index);
    } else if (this.articleItem.expanded) {
      this.articleItem.expanded = !this.articleItem.expanded;
    } else {
      this.articleItem.parent.children.forEach(item => item.expanded = false);
      this.articleItem.expanded = !this.articleItem.expanded;
    }
  }


}
