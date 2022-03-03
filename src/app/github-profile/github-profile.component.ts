import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  id: string = 'No ID yet';
  repos: string = '0'
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  goBack() {
    this.router.navigate(['/followers'])
  }

  ngOnInit(): void {

    console.log("Github Profile OnInit()")

    // this.route.paramMap
    //   .subscribe(
    //     (params) => {
    //       console.log("Parameters", params)
    //       let gitId = params.get('user');
    //       this.id = gitId ? gitId : 'No ID Avaialable'
    //     }
    //   )

    // this.route.queryParamMap
    //   .subscribe(
    //     (params) => {
    //       let r = params.get('noOfRepos');
    //       this.repos = r ? r : '0';
    //     }
    //   )

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(
      (combined) => {

        let gitId = combined[0].get('user');
        this.id = gitId ? gitId : 'No ID Avaialable'

        let r = combined[1].get('noOfRepos');
        this.repos = r ? r : '0';

      }
    )
  }



}
