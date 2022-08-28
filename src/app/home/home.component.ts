import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  categories:Array<ICategory> = [];

  constructor(private categoriesServices:CategoriesService,
    private route:ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.categories = this.categoriesServices.getCategories();
  }
}
