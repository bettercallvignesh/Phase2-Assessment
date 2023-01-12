import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundpageComponent } from './pagenotfoundpage/pagenotfoundpage.component';
import { PaymentComponent } from './payment/payment.component';
import { VegesAddComponent } from './veges-add/veges-add.component';
import { VegesListComponent } from './veges-list/veges-list.component';
import { VegesShellComponent } from './veges-shell/veges-shell.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',redirectTo:'welcome',pathMatch:'full'},
/* {path:'login',component:LoginComponent,
children:[
  {path:'veges',component:VegesListComponent}
]
},  */
{
  path:'welcome',component:WelcomeComponent
},
{path:'login',component:LoginComponent},
{path:'veges',component:VegesListComponent,
},
{
  path:'veges-add',component:VegesAddComponent
},
{
  path:'app-veges-shell',component:VegesShellComponent
},
{
  path:'app-about-us',component:AboutUsComponent
},

{
  path:'app-contact',component:ContactComponent
},
{
  path:'payment',component:PaymentComponent
},

/* {path:'', redirectTo:'veges',pathMatch:'full'},
{path:'veges', component: VegesListComponent},
{path:'veges-add', component: VegesAddComponent}, */
 /* {
  path: 'welcome',

  children: [
    {
      path: '',
      component: VegesListComponent
    },
    {
        path: 'veges-add',
        component: VegesAddComponent
    }

  ]},*/ 

 {
  path:'**',component:PagenotfoundpageComponent

} 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
