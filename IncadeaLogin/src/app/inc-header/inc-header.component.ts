import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-inc-header',
  templateUrl: './inc-header.component.html',
  styleUrls: ['./inc-header.component.css']
})
export class IncHeaderComponent {

@Input() name:string='';
 
}
