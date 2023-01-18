import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../state/vegetable/vegetable.state';
import { AuthService } from './auth.service';
import * as VegetableActions from '../state/vegetable/vegetable.actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
pageTitle:string='Log In';
 constructor(private authService:AuthService,private router:Router) { } /*  ,private store:Store<State> */

  ngOnInit(): void {
  }
  cancel():void{

    this.router.navigate(['welcome']);
  }
  onSubmit(loginForm:NgForm){
    if(loginForm && loginForm.valid){
      const username = loginForm.form.value.userName;
      const password=loginForm.form.value.password;
   //this user is logged in
      this.authService.login(username,password);

      if(this.authService.redirectToUrl){
        this.router.navigateByUrl(this.authService.redirectToUrl);
      }
      else{
        this.router.navigate(['admin']);
      }



    }

  }
}