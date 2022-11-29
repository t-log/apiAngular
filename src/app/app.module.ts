import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerViewComponent } from './passenger-view/passenger-view.component';
import { PublicViewComponent } from './public-view/public-view.component';
import { PetViewComponent } from './pet-view/pet-view.component';
import { UserViewComponent } from './user-view/user-view.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { UsersTwoComponent } from './users-two/users-two.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { HttpClientModule } from '@angular/common/http';
import { QuotesViewComponent } from './quotes-view/quotes-view.component';
const myRoute:Routes=[{path:"",component:PassengerViewComponent},
                      {path:"public",component:PublicViewComponent},
                      {path:"pet",component:PetViewComponent},
                      {path:"user",component:UserViewComponent},
                      {path:"products",component:ProductsViewComponent},
                      {path:"userstwo",component:UsersTwoComponent},
                      {path:"todo",component:TodoViewComponent},
                      {path:"quote",component:QuotesViewComponent},]

@NgModule({
  declarations: [
    AppComponent,
    PassengerViewComponent,
    PublicViewComponent,
    PetViewComponent,
    UserViewComponent,
    ProductsViewComponent,
    UsersTwoComponent,
    TodoViewComponent,
    QuotesViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
