import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [{
    id: 1,
    name: 'Krunal',
    enrollmentNumber: 110470116021,
    college: 'VVP Engineering College',
    university: 'GTU'
  },
  {
    id: 2,
    name: 'Rushabh',
    enrollmentNumber: 110470116023,
    college: 'VVP Engineering College',
    university: 'GTU'
  },
  {
    id: 3,
    name: 'Ankit',
    enrollmentNumber: 110470116022,
    college: 'VVP Engineering College',
    university: 'GTU'
  }];

  getStudents(): Observable<Student[]> {
    const studentObservable = new Observable<Student[]>((subscriber) => {
      setTimeout(() => {
        subscriber.next(this.students)
      }, 3000)
    })

    return studentObservable;
  }

  constructor() { }
}
