import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../services/data-service/data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {

  users: any[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchUsers()
         .subscribe(
        res => {
          this.users = res;
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );

      this.dataService.fetchUsersById("5eaecda0d01513c7cbbcffa4")
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
