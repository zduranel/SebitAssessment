import { NgModule,Input,CUSTOM_ELEMENTS_SCHEMA, Injectable, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SearchListComponent } from './search-list/search-list.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',data:{test: 'test'},component:HomeComponent},
  {path:'categories/:categoriesindex', component:CategoryComponent},
  {path:'postdetail/:categoriesindex',component:PostDetailComponent},
  {path:'search-list/:categoriesindex',component:SearchListComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ],
})



export class AppRoutingModule {
  @Input() searchText :any;
}
