import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from '../../models/user/user';
import { Recipe } from '../../models/recipe/recipe';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private httpClient: HttpClient) { }

  public fetchUsers() :Observable<User[]> {
    let usersData: Observable<User[]> = this.httpClient.get<User[]>('http://localhost:3000/users'); //La requête est censée récupérer un tableau de typer user
    return usersData;
  }

  public fetchUsersById(id: string) :Observable<User[]> {
    let userData: Observable<User[]> = this.httpClient.get<User[]>('http://localhost:3000/users/' + id);
    return  userData;
  }

  public fetchPosts() :Observable<Recipe[]> {
    let usersData: Observable<Recipe[]> = this.httpClient.get<Recipe[]>('http://localhost:3000/recipes'); //La requête est censée récupérer un tableau de typer user
    return usersData;
  }

  public fetchPostsById(id: string) :Observable<Recipe[]> {
    let userData: Observable<Recipe[]> = this.httpClient.get<Recipe[]>('http://localhost:3000/recipes/' + id);
    return  userData;
  }

}