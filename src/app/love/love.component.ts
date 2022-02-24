import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-love',
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.css']
})
export class LoveComponent {

  @Input('isSelected') isSelected: boolean = false;

  @Output() change = new EventEmitter();

  onClick() {
    //  this.isSelected = !this.isSelected;
    this.change.emit();
  }

}
