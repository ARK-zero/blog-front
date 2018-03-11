/**
 * Created by aman on 3/11/2018.
 */
export interface ArticleItem {
  title: string;
  routerLink?: string;
  first?: boolean;
  expanded?: boolean;
  children?: ArticleItem[];
  parent?: ArticleItem;
}
