import { Component, OnInit } from '@angular/core';
import { ObservableService } from './observable.service';

@Component({
  selector: 'app-observable-pipe',
  templateUrl: './observable-pipe.component.html',
  styleUrls: ['./observable-pipe.component.css']
})
export class ObservablePipeComponent implements OnInit {

  constructor(private service: ObservableService) { }

  ngOnInit(): void {

    this.service.getObservableOne()
      .subscribe(
        (data) => {
          console.log('Data from observable', data)
        },
        (error) => {
          console.log('Some Error occurred', error)
        },
        () => {
          console.log('Observable is completed streaming the data')
        }
      )
    console.log('##############################################################################')
    this.service.getObservableTwo()
      .subscribe(
        (data) => {
          console.log('Data', data)
        },
        (error) => {
          console.log("Error Generated:", error)
        },
        () => {
          console.log("Completed...")
        }
      )
  }

}
