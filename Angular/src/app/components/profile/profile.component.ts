import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github/github.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  public user: any = [];
  public repos: any = [];
  
  constructor(private _githubService: GithubService) {
    this._githubService.getUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
   }

  ngOnInit(): void {
    
  }
}
