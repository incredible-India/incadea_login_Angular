import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  template: `
  
  `,
  styles: [
  ]
})

export class LogoutComponent {

  constructor(){
    //clearing the email session from browser
  sessionStorage.clear();
    // //redirecting to the login page
    // //tdd
     document.location.href = ''; 
  }
}