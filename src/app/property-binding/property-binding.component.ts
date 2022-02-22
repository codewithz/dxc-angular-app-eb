import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  title = "Property Binding Example";

  imageURL = "http://codewithz.com/images/camel/02.png";

  colSpan = 2;

  constructor() { }

  ngOnInit(): void {
  }

}
