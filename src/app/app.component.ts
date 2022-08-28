import { Component } from '@angular/core';
import { createAction } from '@ngrx/store';
import { HeaderComponent } from './header/header.component';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  searchText$: Observable<string>;

  constructor(private store: Store<{ searchText: string }>) {
    this.searchText$ = store.select('searchText');
  }
}


