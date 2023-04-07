import { Component } from '@angular/core';
import {NgForm} from "@angular/forms"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  disabled =true

  username=""
  password = ""
  dcode = ''

  //cheking the input fields are valid or not

  getusername(data:string)
  {

    this.username = data;
    this.getButtonValidate();
    
    
  }

  getpassword(data:string)
  {  
    this.password = data;
    this.getButtonValidate();

  }

 getdcode(data:string)
  {  
    this.dcode = data;
    this.getButtonValidate();

  }


  //function for cheking the 
  getButtonValidate()
  {
    if(this.username.trim() == "" && this.password.trim() == "" && this.dcode.trim() == "")
    {
      this.disabled = true

      
    }else{
      this.disabled = false
    
      
     
    }
  }
  //for the form data getting 
  getFormData(data:NgForm)
  {
    
    //first chek the input filed are empty or not if not empty make the button enable



    console.log(data);

    
   
  }
}
