import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  course = {
    title: 'Angular 12 In Depth Training',
    rating: 4.567,
    students: 10023,
    price: 200.34,
    releaseDate: new Date(2022, 0, 26)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
