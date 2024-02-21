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

  constructor(private httpClient: HttpClient) {
    this.username = '';
  }

  getUser(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'token ' + this.token);
    return this.httpClient.get('https://api.github.com/users/' + this.username,{headers: headers})
      .pipe(map((res: any) => res));
  }

  getRepos(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'token ' + this.token);
    return this.httpClient.get('https://api.github.com/users/' + this.username + '/repos', {headers: headers})
      .pipe(map((res: any) => res));
  }

  updateUser(username: string) {
    this.username = username;
  }
}
