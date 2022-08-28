import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})

export class PostDetailComponent implements OnInit {
  searchText = '';
  postDetail?:IPostDetail;
  categoriIndex:any;
  categories:Array<ICategory> = [];

  constructor(private postServices:PostService,
    private route:ActivatedRoute,
    private categoriesServices:CategoriesService,
    ) { }

  ngOnInit(): void {
    this.categoriIndex = this.route.snapshot.paramMap.get('categoriesindex');
    this.postDetail = this.postServices.getPost(this.categoriIndex);
    this.categories = this.categoriesServices.getCategories(this.categoriIndex);
  }
}
