import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  year: string = '';
  month: string = '';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap
      .subscribe(
        (params) => {
          let year = params.get('year');
          this.year = year ? year : 'Default';

          let month = params.get('month');
          this.month = month ? month : 'Default'
        }
      )

  }

  viewAll() {
    this.router.navigate(['/archive-home'])
  }

}
