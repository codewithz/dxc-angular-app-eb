import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // inputs: ['isSelected']
})
export class FavoriteComponent implements OnInit {

  @Input('isSelected') isFavorite: boolean = false;

  //isSelected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
