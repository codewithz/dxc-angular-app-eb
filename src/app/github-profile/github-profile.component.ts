import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  id: string = 'No ID yet';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(
        (params) => {
          console.log("Parameters", params)
          let gitId = params.get('user');
          this.id = gitId ? gitId : 'No ID Avaialable'
        }
      )
  }

}
