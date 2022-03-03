import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import { GithubUser } from './github-user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: GithubUser[] = [];
  constructor(private route: ActivatedRoute, private service: GithubService) { }

  ngOnInit(): void {

    this.route.queryParamMap
      .subscribe(
        (params) => {
          console.log("Page :", params.get('page'))
          console.log("Order :", params.get('order'))
        }
      )

    this.service.getFollowers()
      .subscribe(
        (response) => {
          this.followers = response;
          console.log(this.followers[0])
        }
      );
  }

}
