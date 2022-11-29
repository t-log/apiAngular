import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quotes-view',
  templateUrl: './quotes-view.component.html',
  styleUrls: ['./quotes-view.component.css']
})
export class QuotesViewComponent {
  constructor(private api:ApiService){api.fetchQuotes().subscribe(
    (response)=>{this.quoteData=response}
  )}
  quoteData:any = []
}
