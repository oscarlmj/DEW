import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _githubService: GithubService) {
    console.log("Hola");
  }

  ngOnInit(): void {
  }
}
