import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IncHeaderComponent } from './inc-header/inc-header.component';
import {UserloginModule} from "./userlogin/userlogin.module"
import { LoginComponent } from './userlogin/login/login.component';
import {Routes,RouterModule} from "@angular/router"
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { WelocomeComponent } from './welocome/welocome.component';


//defining the routing path
var route:Routes =[

//for the default path
{path:"",component:IncHeaderComponent},

//after login user information show based on dealerCode
{path:"user/:dcode", component:WelocomeComponent},
//for the 404 error not found path

{path:"**",component:FileNotFoundComponent}


]



@NgModule({
  declarations: [
    AppComponent,
    IncHeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    UserloginModule,
    RouterModule.forRoot(route)

  ],


  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
