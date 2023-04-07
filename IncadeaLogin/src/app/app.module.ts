import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IncHeaderComponent } from './inc-header/inc-header.component';
import {UserloginModule} from "./userlogin/userlogin.module"
import { LoginComponent } from './userlogin/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    IncHeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    UserloginModule,

  ],


  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
