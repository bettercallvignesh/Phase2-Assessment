import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from '../welcome/welcome.component';
import { VegesAddComponent } from '../veges-add/veges-add.component';
import { VegesListComponent } from '../veges-list/veges-list.component';



@NgModule({
  declarations: [],
  imports:  [
    CommonModule,FormsModule,ReactiveFormsModule]

})
export class VegesModule { } 
