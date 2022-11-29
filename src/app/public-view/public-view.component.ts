import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-public-view',
  templateUrl: './public-view.component.html',
  styleUrls: ['./public-view.component.css']
})
export class PublicViewComponent {
  constructor(private api:ApiService){api.fetchPublic().subscribe(
    (response)=>{this.publicData=response}
  )}
  publicData:any = []
}
