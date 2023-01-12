import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Phase2Assessment';


  @ViewChild(GreetingComponent)greetingc!:GreetingComponent;
  //how to access ref1 template reference variable in component



pageTitle:string='Online Shopping';

get isLoggedIn():boolean{
  //service to return the loggedInstatus ofthe user
  //we will have to inject a authentication service which will checkt the loggedIn
 //still pending
  return this.authservice.isLoggedIn();
}


get userName():string{

//thru the authentication service we can the current user
//that we will return
if(this.authservice.currentUser)
return this.authservice.currentUser?.userName;

return '';

}
constructor(private router:Router,private authservice:AuthService){}


  ngOnInit(): void {
    console.log('app on init')
  }

  logOut():void{

    //this should also use the authserviceto logout the current user
    //you can route to some url
    this.authservice.logOut();
    this.router.navigate(['/welcome']);
  }/* 
  ngOnDestroy(): void {
    console.log('menu destroyed');}


    ngOnChanges():void{
     console.log('menu component changes');
    }

    ngDoCheck(){
      console.log('doCheck of menu');
    }

    ngAfterContentInit(){

      console.log('menu content init');

    }
    ngAfterContentChecked(){
      console.log('menu content checked');
    }
    ngAfterViewInit(){
      console.log('menu view init');

    }

   ngAfterViewChecked(){
    console.log('menu view checked');

   } */
    greet():void{
    console.log(this.greetingc.displayMessage());
    this.pageTitle=this.greetingc.displayMessage();
   } 
}
