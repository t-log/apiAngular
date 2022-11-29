import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pet-view',
  templateUrl: './pet-view.component.html',
  styleUrls: ['./pet-view.component.css']
})
export class PetViewComponent {
  constructor(private api:ApiService){api.fetchPets().subscribe(
    (response)=>{this.petData=response}
  )}
  petData:any = []
}
