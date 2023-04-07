import { Component,Input } from '@angular/core';

import { FormGroup,FormControl,Validators } from '@angular/forms';

//this json file contain the user information
import data from  "../../../assets/Employee.json";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  constructor(){
    localStorage.clear();
  }

  error:boolean = false;
  errorMessage:string | null = null; 



//login validators
  loginform = new FormGroup({

    username:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
    dcode:new FormControl('',[Validators.required,Validators.nullValidator])
  })

//return the form data
  login(){
    //clear the local storage
  
    //user form information
    let userDataFromTheForm = this.loginform.value;

    //user data from the employee.json
    const userOriginalInformation = data;


    console.log(this.loginform.value);

    console.log(userOriginalInformation);
    
    //performing the validations

    data.Employee.forEach(e=>{

      //first checking the username
      if(e.Username == userDataFromTheForm.username)
      {
        //if username is correct then check for the password
        if(e.Password == userDataFromTheForm.password)
        {
          //if password is correct then go for the dealer code

          if(e.Dcode == userDataFromTheForm.dcode)
          {
            //then redirect to the Welcome page
            this.error =false;

            this.errorMessage = null;
            //for authentication...
            localStorage.setItem('dcode',e.Dcode);
            //redirect to the other welcome page
            document.location.href = `/user/${e.Dcode}`;


          }else{
            //incorrect dcode
          
            this.error =true;
            this.errorMessage = "Invalid Credential"
          }


        }else{
          //incorrect password
          this.error =true;
          this.errorMessage = "Invalid Credential"
        }

      }else{
        //incorrect username
        this.error =true;
        this.errorMessage = "Invalid Credential"


      }


    })
    

    
  }


  //writing some validator

  get username(){
    return this.loginform.get('username')
  }

  get password(){
    return this.loginform.get('password')
  }

  get dcode(){
    return this.loginform.get('dcode');
  }
}
