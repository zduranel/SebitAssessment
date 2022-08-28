import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

import data from '../../data/categories.json';


@Injectable({
  providedIn: 'root'
})


export class CategoriesService extends BaseService {
  constructor(
    private base:BaseService
  ) {
    super(base.http)
  }

  public getCategories(id?: number): Array<ICategory> {
    if (id) {
      return data.categories.filter(item => item.id === +id);
    }
      return data.categories;
  }
}
