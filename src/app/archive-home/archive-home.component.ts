import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive-home',
  templateUrl: './archive-home.component.html',
  styleUrls: ['./archive-home.component.css']
})
export class ArchiveHomeComponent implements OnInit {

  archives = [
    { year: 2022, month: 1 },
    { year: 2022, month: 2 },
    { year: 2022, month: 3 },
    { year: 2022, month: 4 },
    { year: 2022, month: 5 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
