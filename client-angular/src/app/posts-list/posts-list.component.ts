import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../services/data-service/data.service';
import { Recipe } from '../models/recipe/recipe';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})

export class PostsListComponent implements OnInit {

  public recipes: Recipe[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
      this.dataService.fetchPosts()
         .subscribe(
        res => {
          this.recipes = res;
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );

      this.dataService.fetchPostsById("5eb914957162e33d5e90a6c3")
         .subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
  }
}
