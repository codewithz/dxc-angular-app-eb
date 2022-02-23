import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: Event) {
    event.stopPropagation();
    console.log("Save Button Clicked", event);
  }

  onOuterDivClicked() {
    console.log("Outer Div Clicked")
  }
  onInnerDivClicked() {
    console.log("Inner Div Clicked")
  }
}
