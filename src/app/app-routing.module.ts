import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminShellComponent } from './admin-shell/admin-shell.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './login/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { PagenotfoundpageComponent } from './pagenotfoundpage/pagenotfoundpage.component';
import { PaymentComponent } from './payment/payment.component';
import { VegesAddComponent } from './veges-add/veges-add.component';
import { VegesListComponent } from './veges-list/veges-list.component';
import { VegesShellComponent } from './veges-shell/veges-shell.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',redirectTo:'welcome',pathMatch:'full'},
{path:'admin',component:AdminComponent,
children:[
  {path:'admin-add',component:AdminAddComponent}
]
}, 
{
  path:'welcome',component:WelcomeComponent
},
 {path:'login',component:LoginComponent},
 {path:'admin',component:AdminComponent},
  {
  path:'admin',
  component:AdminComponent,
  canActivate:[AuthGuard],
  loadChildren:()=>import('../app/admin/admin.module').then(m=>m.AdminModule)
 },
{path:'admin-shell',component:AdminShellComponent,
},
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
  {
    path:'veges',
    component:VegesListComponent,
    canActivate:[AuthGuard],
    loadChildren:()=>import('../app/veges/veges.module').then(m=>m.VegesModule)
   },

 {
  path:'**',component:PagenotfoundpageComponent

} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
