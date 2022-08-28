import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { change } from '../store/searchText.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})


export class HeaderComponent implements OnInit {
  postsDetail:Array<IPostDetail> = [];
  dataSource = new MatTableDataSource(this.postsDetail);
  searchText$: Observable<string>;

  private sub = this.router.events.subscribe(() => this.resetSearchText())

  constructor(private router: Router, private postServices:PostService, private store: Store<{ searchText: string }>) {
    this.searchText$ = store.select('searchText');
  }

  ngOnInit(): void {
    this.postsDetail = this.postServices.getPosts();
  }

  resetSearchText() {
    this.store.dispatch(change({text: ''}));
    this.searchText$ = this.store.select('searchText');
  }

  onChange(event: any) {
    this.store.dispatch(change({ text: event.target.value }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
