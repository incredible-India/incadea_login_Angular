import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
error:boolean=false
errorMessage:string=""


//handling the form
//login validators
signUp = new FormGroup({

  useremail:new FormControl('',[Validators.required,Validators.email]),
  userpassword:new FormControl('',[Validators.required,Validators.min(5)]),
  username:new FormControl('',[Validators.required,Validators.nullValidator,Validators.min(2)])
})


//registring new user 
crtAccount(){
  //clear the local storage

  //user form information
  let userDataFromTheForm = this.signUp.value;
  let x= localStorage.length;
  //saving information in local storage


  let newuser ={
    username : userDataFromTheForm.username,
    userpassword:userDataFromTheForm.userpassword,
    useremail:userDataFromTheForm.useremail,
    dcode:Math.floor(Math.random() * 100)
  
    

  }



   //saving the dtaa in the local storage
    localStorage.setItem(`username${x+1}`,JSON.stringify(newuser));
                //for authentication...
             
                sessionStorage.setItem('isauth',`${newuser.dcode}`)
         //redirect to the other welcome page
     document.location.href = `/user/${x+1}/${newuser.dcode}`;


  }

 


  
  
  //performing the validations




  

  



//for the error 

get username(){
  return this.signUp.get('username')
}

get userpassword(){
  return this.signUp.get('userpassword')
}

get useremail(){
  return this.signUp.get('useremail');
}

}
