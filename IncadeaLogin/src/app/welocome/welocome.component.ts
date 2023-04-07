import { Component ,OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router"
//geeting the json file 
import data from  "../../assets/Employee.json";


@Component({
  selector: 'app-welocome',
  template: `
    <h1>
     {{name}}
</h1>
  `,
  styles: [
  ]
})
export class WelocomeComponent {
   name:any;
  constructor(private route:ActivatedRoute){

  }

  ngOnInit() : void{
    let id = this.route.snapshot.paramMap.get('dcode');

    //now finding the data on the basis of id if user is authenticated
    if(localStorage.getItem('dcode') )
    {
     //checking the current user id

     if(localStorage.getItem('dcode')==id)
     {
      data.Employee.forEach(e=>{
        if(e.Dcode == id)
        {
          this.name = "Welcome To the Incadea, Mr " + e.Name;
        }
      })

     }else{
      //current user d did not matched with that
      this.name = "You are not Authenticated..";
     }


    }else{
      //user is not authorised 
      this.name = "You are not Authenticated..";
    }
 
  }
}
