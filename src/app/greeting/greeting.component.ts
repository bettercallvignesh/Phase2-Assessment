import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {
  title1:string='greeting';
  @Input()  messageText:string='Welcome'
   constructor(){console.log('greeting constructed') }

   displayMessage():string{
    return this.messageText;
  } 

  }
