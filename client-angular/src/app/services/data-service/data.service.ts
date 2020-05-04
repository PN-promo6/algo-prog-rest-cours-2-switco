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
      // .subscribe(
      //   res => {
      //     console.log(res);
      //   },
      //   error => {
      //     console.log(error);
      //   }
      // );
  }
}
