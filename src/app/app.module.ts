import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* import { VegesAddComponent } from './veges-add/veges-add.component';
import { VegesListComponent } from './veges-list/veges-list.component'; */
import { VegesShellComponent } from './veges-shell/veges-shell.component';
import { GreetingComponent } from './greeting/greeting.component';
/* import { WelcomeComponent } from './welcome/welcome.component'; */
import { PagenotfoundpageComponent } from './pagenotfoundpage/pagenotfoundpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryEventDbService } from './inmemoryeventdbservice';

import { FilterPipe } from './shared/filter.pipe';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { MaterialModule } from 'src/app/material-module/material.module';
import { PaymentComponent } from './payment/payment.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { AdminComponent } from './admin/admin.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { RouterModule } from '@angular/router';
import { AdminShellComponent } from './admin-shell/admin-shell.component';
import { vegetableReducer } from './state/vegetable/vegetable.reducer';
import { VegetableEffects } from './state/vegetable/vegetable.effects';
import { MatFormField } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    
   LoginComponent,
   
    // VegesListComponent,
    // VegesAddComponent,
    VegesShellComponent,
    GreetingComponent,
    // WelcomeComponent,
    PagenotfoundpageComponent,
    FilterPipe,
    AboutUsComponent,
    ContactComponent,
    PaymentComponent,
    // AdminShellComponent,
    // AdminComponent,
    // AdminAddComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    RouterModule,
   AppRoutingModule,
   MaterialModule,
  
   BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forFeature('veges',vegetableReducer),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AppEffects,VegetableEffects]),
    StoreDevtoolsModule.instrument(),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryEventDbService),
  ],
  providers: [],
  bootstrap: [AppComponent],
/*   schemas: [
    CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA
  ]
 */
})
export class AppModule { }
