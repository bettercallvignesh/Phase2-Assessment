import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VegesAddComponent } from './veges-add/veges-add.component';
import { VegesListComponent } from './veges-list/veges-list.component';
import { VegesShellComponent } from './veges-shell/veges-shell.component';
import { GreetingComponent } from './greeting/greeting.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundpageComponent } from './pagenotfoundpage/pagenotfoundpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryEventDbService } from './inmemoryeventdbservice';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './shared/filter.pipe';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { MaterialModule } from 'src/material-module/material.module';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
   LoginComponent,
   
    VegesListComponent,
    VegesAddComponent,
    VegesShellComponent,
    GreetingComponent,
    WelcomeComponent,
    PagenotfoundpageComponent,
    FilterPipe,
    AboutUsComponent,
    ContactComponent,
    PaymentComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
   AppRoutingModule,
   MaterialModule,
   BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryEventDbService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
