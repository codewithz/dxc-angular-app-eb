import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import { GithubUser } from './github-user.model';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: GithubUser[] = [];
  constructor(private service: GithubService) { }

  ngOnInit(): void {
    this.service.getFollowers()
      .subscribe(
        (response) => {
          this.followers = response;
          console.log(this.followers[0])
        }
      );
  }

}
