import { Component } from '@angular/core';
import { Reset } from '@ngrx/store-devtools/src/actions';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  myFunction(){
    alert("Adding Succesful!"); 
  }
}
