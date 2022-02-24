import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-for-track',
  templateUrl: './directive-for-track.component.html',
  styleUrls: ['./directive-for-track.component.css']
})
export class DirectiveForTrackComponent {
  courses = [
    { id: 1, name: 'Course 1' },
    { id: 2, name: 'Course 2' },
    { id: 3, name: 'Course 3' },
    { id: 4, name: 'Course 4' },
  ]

  onAdd() {
    this.courses.push({ id: 5, name: 'Course 5' });
  }

  onRemove(course: { id: number, name: string }) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

}
