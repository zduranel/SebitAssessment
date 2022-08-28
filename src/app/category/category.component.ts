import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  postsDetail:Array<any> = [];
  categoriIndex:any;
  categories:Array<any> = [];



  constructor(private postServices:PostService,
    private route:ActivatedRoute,
    private categoriesServices:CategoriesService,

    ) { }


  ngOnInit(): void {

    this.categoriIndex = this.route.snapshot.paramMap.get('categoriesindex');

    this.postsDetail = this.postServices.getPosts(this.categoriIndex);

    this.categories = this.categoriesServices.getCategories(this.categoriIndex);
  }
}
