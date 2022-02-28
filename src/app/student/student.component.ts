import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[] = [];
  constructor(private service: StudentService) {
    const studentObservable = service.getStudents();

    studentObservable.subscribe(
      (data) => {
        this.students = data;
      },
      (error) => { },
      () => { }
    );

  }

  ngOnInit(): void {
  }

}
