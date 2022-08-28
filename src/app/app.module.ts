import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { searchTextReducer } from './store/searchText.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { BaseService } from './services/base.service';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CategoryComponent } from './category/category.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchListComponent } from './search-list/search-list.component';
import { RouterModule } from '@angular/router';
import { SortByOrderPipe } from './sort-by-order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PostDetailComponent,
    CategoryComponent,
    SearchListComponent,
    SortByOrderPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    AngularEditorModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule,
    StoreModule.forRoot({ searchText: searchTextReducer })
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
