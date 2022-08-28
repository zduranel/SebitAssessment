import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import data from '../../data/posts.json';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService {

  constructor(
    private base:BaseService
  ) {
    super(base.http)
  }



  public getPosts(id?:number): Array<IPostDetail> {
    if (id) {
      return data.posts.filter(item => item.category_id === +id);
    }

    return data.posts;
  }

  public getPost(id:number): IPostDetail | undefined {
    return data.posts.find(item => item.id === +id);
  }
}

