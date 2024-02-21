/**import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username: string;

  constructor(private _http:HttpClient) {
    this.username = 'bradtraversy';
   }

   getUser(){
     return this._http.get('https://api.github.com/users/'+this.username)
     .pipe(map(res => res as any));
   }
}**/


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username: string;
  private url = 'https://api.github.com/user';
  private token = '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';

  constructor(private _http: HttpClient) {}

  getUser(): Observable<any> {
    const headers = new HttpHeaders({ Authorization: `token ${this.token}` });
    return this._http.get<any>(this.url, { headers });
  }
}