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
    //  constructor() { }



     constructor(private loggingService:LoggingService){}
    
    log(){
      console.log(this.loggingService.getLogging());
    }
  } 
/*   import { Component } from '@angular/core';
  import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
  import { NgIf } from '@angular/common';
  
  @Component({
    selector: 'ngbd-carousel-basic',
    standalone: true,
    imports: [NgbCarouselModule, NgIf],
    templateUrl: './carousel-basic.html',
  })
  export class NgbdCarouselBasic {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  } */