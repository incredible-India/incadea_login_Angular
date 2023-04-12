import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { TddComponent } from './tdd/tdd.component'
import {IncHeaderComponent} from "./../inc-header/inc-header.component";
import { SignupComponent } from './signup/signup.component';
import {Routes,RouterModule} from "@angular/router";
import { LogoutComponent } from './logout/logout.component'
@NgModule({
  declarations: [
    LoginComponent,
    TddComponent,
    IncHeaderComponent,
    SignupComponent,
    LogoutComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    
    ReactiveFormsModule

  ],exports:[
    LoginComponent,
    TddComponent,
    IncHeaderComponent,
    SignupComponent
    ,LoginComponent
    
  ]
})
export class UserloginModule { }
