import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private httpClient: HttpClient) { }

  public fetchUsers() :Observable<any> {
    let usersData: Observable<any> = this.httpClient.get('http://localhost:3000/users');
    return usersData;
  }

  public fetchUsersById(id: string) :Observable<any> {
    let userData: Observable<any> = this.httpClient.get('http://localhost:3000/users/' + id);
    return  userData;
  }
}