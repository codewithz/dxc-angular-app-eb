import { Component, OnInit } from '@angular/core';
import { ClonegitService } from './clonegit.service';

@Component({
  selector: 'app-clone-github-follower',
  templateUrl: './clone-github-follower.component.html',
  styleUrls: ['./clone-github-follower.component.css']
})
export class CloneGithubFollowerComponent implements OnInit {

  followers: any = []
  constructor(private service: ClonegitService) { }

  ngOnInit(): void {

    this.service.getAll()
      .subscribe(
        (response) => {
          this.followers = response;
        }
      )
  }

}
