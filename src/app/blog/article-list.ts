import {ArticleItem} from './article-list/common/article-item';

export const ArticleList: ArticleItem[] = [
  {
    title: 'Hello World',
    children: [
      {title: 'HelloFriendasdasdasdasdqweqweqwe', routerLink: '/abs'},
      {title: 'Hello Friend', routerLink: '/abs'},
    ]
  },
  {
    title: 'Hello World',
    children: [
      {title: 'Hello Friend', routerLink: '/pages'},
      {title: 'Good Boy', routerLink: '/abs'},
    ]
  },
  {
    title: 'Hello World',
    children: [
      {title: 'Hello Friend', routerLink: '/abs'},
      {title: 'GoodBoy', routerLink: '/abs'},
      {title: 'Hello', routerLink: '/abs'}
    ]
  }
];
