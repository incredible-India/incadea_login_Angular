import { Component ,OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import { RouterOutlet,RouterModule } from '@angular/router';
//geeting the json file 
import data from  "../../assets/Employee.json";


@Component({
  selector: 'app-welocome',
  template: `
    <h1>
 {{name}} Your Dealer ID is {{did}} 
 
</h1>
<a href='/logout'>

     Logout

     </a>

  `,
  styles: [
  ]
})
export class WelocomeComponent {
   name:any;
   did:any;
  constructor(private route:ActivatedRoute){


if (sessionStorage.getItem('isauth') == null) {
  
  //send back to the login page
  document.location.href = "";

}

  }


 

  ngOnInit() : void{
    let id = this.route.snapshot.paramMap.get('dcode');
    let usernumber = this.route.snapshot.paramMap.get('usernumber');
  
    //chceking th eusername in local storage key

    if (usernumber == null)
    {
      usernumber = " ";
    }

    let user = localStorage.getItem(`username${usernumber}`)
    //coz localstoarage always take string 
    if(user !=null)
    {

      const userinfo = JSON.parse(user); // parse the user string to a user object

      if(userinfo.dcode == id && sessionStorage.getItem('isauth')==id)
      {
        this.name = "Welcome To the Incadea, Mr " + userinfo.username;
        this.did = id;
      }else{
        //if dcode not matched
        this.name = "You are not Authenticated..";
      }

   
//if user number not matched

    }else{
      this.name = "You are not Authenticated..";
    }
  

   
 
  }
}
