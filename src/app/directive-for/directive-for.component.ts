import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-for',
  templateUrl: './directive-for.component.html',
  styleUrls: ['./directive-for.component.css']
})
export class DirectiveForComponent {

  movies = [
    { id: 1, name: 'Movie 1' },
    { id: 2, name: 'Movie 2' },
    { id: 3, name: 'Movie 3' },
    { id: 4, name: 'Movie 4' },
  ]


}
