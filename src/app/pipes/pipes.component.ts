import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  longDescription: string = `
  Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.

  These Angular docs help you learn and use the Angular framework and development platform, from your first application to optimizing complex single-page apps for enterprises. Tutorials and guides include downloadable examples to accelerate your projects.
  `
  course = {
    title: 'Angular 12 In Depth Training',
    description: this.longDescription,
    rating: 4.567,
    students: 10023,
    price: 200.34,
    releaseDate: new Date(2022, 0, 26)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
