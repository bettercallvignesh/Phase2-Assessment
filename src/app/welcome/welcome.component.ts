 import { Component } from '@angular/core';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  title="welcome";
  name="vikram";
  welcomeMsg:string="Welcome to Angular App";
    num:number=0;
     data:number=3;
    constructor(private loggingService:LoggingService){}
    
    log(){
      console.log(this.loggingService.getLogging());
    }
  } 
