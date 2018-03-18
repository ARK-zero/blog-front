/**
 * Created by aman on 3/13/2018.
 */
export class Article {
  constructor() {
    this.title = '';
    this.author = '';
    this.classification = '';
    this.content = '';
  }

  title: string;
  author: string;
  classification: string;
  content: any;
  createdAt?: any;
  updatedAt?: any;
  _id?: string;
  src?: any;
}
