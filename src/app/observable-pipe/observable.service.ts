import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  observableOne = new Observable<number>((subscriber) => {
    subscriber.next(1)
    subscriber.next(2)
    subscriber.next(3)
    subscriber.next(4)
    subscriber.next(5)
    subscriber.next(6)
    subscriber.next(7)
    subscriber.complete()
  }).pipe(
    filter(
      (data) => data % 2 == 0
    ),
    map(
      (data) => data * 3
    )
  )

  myData = [1, 2, 3, 'A', 4, 5, 'B', 'C', 'D']

  observableTwo = from(this.myData)
    .pipe(
      map(
        (data) => {
          let result = (data as number) * 2;

          if (Number.isNaN(result)) {
            throw new Error('Result is not a number')
          }
          return result;
        }
      ),
      catchError(
        (error) => {
          console.log('Error Manangement/ Manipulation can be done here...')
          return throwError(error)
        }
      )
    )




  getObservableOne() {
    return this.observableOne;
  }

  getObservableTwo() {
    return this.observableTwo;
  }

}
