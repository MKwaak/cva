import { GrayMatterFile } from 'gray-matter';

type Category = 'software development' | 'agile' | 'society';

export interface PostBlog {
  title: string;
  intro: string;
  author: string;
  authorImageUrl?: string;
  date: string;
  timeStamp: number;
  categories: Array<Category>;
}

export interface PostEvent {
  title: string;
  intro: string;
  location: string;
  city: string;
  address: string;
  date: string;
  timeStampEpoch: number;
}

export interface Data<T> {
  document: {
    content: string;
    data: T;
    isEmpty?: boolean;
    excerpt?: string;
  };
  slug: string;
}

export interface DocumentFrontMatter<T> extends GrayMatterFile<Buffer> {
  data: T;
  orig: Buffer;
}

export interface Article {
  issue: number;
  title: string;
  year: number;
  doi: string;
  journal: string;
  volume: string;
  uuid: string;
  abstract: string;
}

export interface ServerResponseInterface {
  type: 'success' | 'warning' | 'error';
  message: string;
}
