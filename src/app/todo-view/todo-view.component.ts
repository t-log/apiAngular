import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent {

  constructor(private api:ApiService){api.fetchToDos().subscribe(
    (response)=>{this.todoData=response}
  )}

  todoData:any = []
}
