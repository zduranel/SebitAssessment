import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { PostService } from '../services/post.service';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})

export class SearchListComponent implements OnInit {
  postsDetail?:Array<IPostDetail> = [];
  categoriIndex:any;
  categories:Array<ICategory> = [];
  searchText$: Observable<string>;



  @Output() SearchEvent = new EventEmitter();

  constructor(private postServices:PostService,
    private categoriesServices:CategoriesService,
    private route:ActivatedRoute, private store: Store<{ searchText: string }>) {
      this.searchText$ = store.select('searchText');
    }

  ngOnInit(): void {
    this.categoriIndex = this.route.snapshot.paramMap.get('categoriesindex');
    this.postsDetail = this.postServices.getPosts();
    this.categories = this.categoriesServices.getCategories();
  }
}
