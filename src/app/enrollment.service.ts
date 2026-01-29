import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http: HttpClient) { }

  enroll(userData: User) {
    // post method will return an Observable -> So, we need to subscribe to it where we are calling this method
    return this._http.post<any>(this._url, userData); 
  }
}
