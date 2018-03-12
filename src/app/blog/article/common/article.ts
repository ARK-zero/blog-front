/**
 * Created by aman on 3/13/2018.
 */
export class Article {
  constructor(article) {
    this.title = article.title || '';
    this.author = article.author || '';
    this.classification = article.classification || '';
    this.content = article.content || '';
    this.createdAt = article.createdAt || null;
    this.updatedAt = article.updatedAt || null;
    this._id = article._id || null;

  }

  title: string;
  author: string;
  classification: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  _id?: string;
}
