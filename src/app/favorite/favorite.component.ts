import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // inputs: ['isSelected']
})
export class FavoriteComponent implements OnInit {

  @Input('isSelected') isFavorite: boolean = false;

  @Output('change') change = new EventEmitter();

  //isSelected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    let someObject = {
      color: 'yellow'
    }
    this.change.emit(someObject);
  }
}
