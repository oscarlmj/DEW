import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient en lugar de HttpClientModule

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username: string;

  constructor(private _http: HttpClient) { // Usa HttpClient en lugar de HttpClientModule
    this.username = 'oscarlmj';
   }

   getUser() {
    return this._http.get('http://api.github.com/users/' + this.username);
   }
}
