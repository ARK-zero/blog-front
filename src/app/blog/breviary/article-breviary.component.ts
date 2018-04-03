import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Article} from '../article/common/article';
import {ArticleService} from '../services';
import {ActivatedRoute} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-article-breviary',
  templateUrl: './article-breviary.component.html',
  styleUrls: ['./article-breviary.component.scss']
})
export class ArticleBreviaryComponent implements OnInit, OnDestroy {

  breviaries: Article[] = [];
  moreBrevs = true;
  count = 1;

  scrollMore$: Observable<any>;
  scrollMoreSubscription: Subscription;

  constructor(private articleService: ArticleService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getBrevs();
    this.scrollMore();
  }

  ngOnDestroy() {
    this.scrollMoreSubscription.unsubscribe();
  }

  scrollMore() {
    this.scrollMore$ = Observable.fromEvent(document.body, 'scroll')
      .filter((event) => event['target'].scrollHeight - (event['target'].scrollTop + event['target'].offsetHeight) < 200)
      .filter((event) => {
        if (this.moreBrevs) {
          return event;
        }
      })
      .throttleTime(500);
    this.scrollMoreSubscription = this.scrollMore$.subscribe((event) => {
      this.getBrevs();
    });
  }

  getBrevs() {
    const queryParams = {
      index: this.count,
      author: this.activatedRoute.snapshot.params.author || null
    };
    this.articleService.getBrevs(queryParams).subscribe((brevs) => {
      this.breviaries = this.breviaries.concat(brevs);
      this.count++;
      if (brevs.length < 20) {
        this.moreBrevs = false;
      }
    });
  }

}
