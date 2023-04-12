import { Component, ViewChild,NgModule,Input } from '@angular/core';
import { NgForm } from '@angular/forms';

//this json file contain the user information
import data from  "../../../assets/Employee.json";
@Component({
  selector: 'app-tdd',
  templateUrl: './tdd.component.html',
  styleUrls: ['./tdd.component.css']
})
export class TddComponent {
error:boolean =false;
errorMessage:string|null = null;

//for the two way binding
name:string="";

// @Input() name: string = '';

constructor(){

}

//viewchild for the update while user enter tha data

//@ViewChild("formdata") logData:any;



loginForm(logData:NgForm){

  let userinfo = logData.value;
console.log(userinfo);

  // this.name =this.logData
let len = localStorage.length;
let x=0;
for(x;x<len;x++)
  {
    const user = localStorage.getItem(`username${x+1}`)

    if(user != null)
    {
      const cu = JSON.parse(user);

      // first checking the username
    if(cu.useremail == userinfo.username)
    {
      //if username is correct then check for the password
      if(cu.userpassword == userinfo.password)
      {
        //if password is correct then go for the dealer code

        if(cu.dcode == userinfo.dcode)
        {
          //then redirect to the Welcome page
          this.error =false;

          this.errorMessage = null;

          logData.reset();

          
          //for authentication...
          // localStorage.setItem('dcode',e.Dcode);
   
            //for authentication...
           sessionStorage.setItem('isauth',`${userinfo.dcode}`)
                   //redirect to the other welcome page
          document.location.href = `/user/${x+1}/${userinfo.dcode}`;


         } // }else{
        //   //incorrect dcode
        
        //   this.error =true;
        //   this.errorMessage = "Invalid Credential"
        // }


       }//else{
      //   //incorrect password
      //   this.error =true;
      //   this.errorMessage = "Invalid Credential"
      // }

    }//else{
      //incorrect username
     // this.error =true;
     // this.errorMessage = "Invalid Credential"


  //  }

    }

  }
  this.error =true;
      this.errorMessage = "Invalid Credential"

  // data.Employee.forEach(e=>{

  //   //first checking the username
  //   if(e.Username == userinfo.username)
  //   {
  //     //if username is correct then check for the password
  //     if(e.Password == userinfo.password)
  //     {
  //       //if password is correct then go for the dealer code

  //       if(e.Dcode == userinfo.dcode)
  //       {
  //         //then redirect to the Welcome page
  //         this.error =false;

  //         this.errorMessage = null;

  //         logData.reset();

          
  //         //for authentication...
  //         localStorage.setItem('dcode',e.Dcode);
  //         //redirect to the other welcome page
  //         document.location.href = `/user/${e.Dcode}`;


  //       }else{
  //         //incorrect dcode
        
  //         this.error =true;
  //         this.errorMessage = "Invalid Credential"
  //       }


  //     }else{
  //       //incorrect password
  //       this.error =true;
  //       this.errorMessage = "Invalid Credential"
  //     }

  //   }else{
  //     //incorrect username
  //     this.error =true;
  //     this.errorMessage = "Invalid Credential"


  //   }


  // })
  

    

}


//validating the username()

}


