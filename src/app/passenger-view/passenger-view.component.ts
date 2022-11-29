import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-passenger-view',
  templateUrl: './passenger-view.component.html',
  styleUrls: ['./passenger-view.component.css']
})
export class PassengerViewComponent {
    constructor(private api:ApiService){api.fetchPassenger().subscribe(
      (response)=>{this.passengerData=response}
    )}
    passengerData:any = []
}
