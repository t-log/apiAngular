import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchToDos=()=>{return this.http.get("https://dummyjson.com/todos")}
  fetchQuotes=()=>{return this.http.get("https://dummyjson.com/quotes")}
  fetchPassenger=()=>{return this.http.get("https://api.instantwebtools.net/v1/passenger?page=0&size=30")}
  fetchPets=()=>{return this.http.get("https://api.publicapis.org/entries")}
}
