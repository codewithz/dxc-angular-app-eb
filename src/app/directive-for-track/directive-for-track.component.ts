
import { Component, OnInit } from '@angular/core';

interface Course {
  id: number,
  name: string
}

@Component({
  selector: 'app-directive-for-track',
  templateUrl: './directive-for-track.component.html',
  styleUrls: ['./directive-for-track.component.css']
})
export class DirectiveForTrackComponent {
  courses: any;

  loadCourses() {
    this.courses = [
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
      { id: 3, name: 'Course 3' },
      { id: 4, name: 'Course 4' },
    ]
  }

  onAdd() {
    this.courses.push({ id: 5, name: 'Course 5' });
  }

  onRemove(course: Course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onUpdate(course: Course) {
    let index = this.courses.indexOf(course);
    let courseClone = this.courses[index];
    courseClone.name = 'Test Course';
    this.courses[index] = courseClone

  }

  trackCourse(index: number, course: Course) {
    return course ? course.id : undefined;
  }

}
