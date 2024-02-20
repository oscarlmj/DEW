import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username: string;
  private client_id = 'ee8aeffbb8d2ff9ab03c';
  private client_secret = 'e9db053cb8b69d929922390327598c883a391017';
  private token = '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';

  constructor(private _http: HttpClient) {
    this.username = 'bradtraversy';
  }

  getUser(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `token ${this.token}`);
    return this._http.get(`https://api.github.com/users/${this.username}+?client_id=${this.client_id}&client_secret=${this.client_secret}`)
      .pipe(map((res: any) => res));
  }

  getRepos(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `token ${this.token}`);
    return this._http.get(`https://api.github.com/users/${this.username}/repos`+`?client_id=${this.client_id}&client_secret=${this.client_secret}`)
      .pipe(map((res: any) => res));
  }

  updateUser(username: string) {
    this.username = username;
  }
}
