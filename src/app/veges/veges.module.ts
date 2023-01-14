import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from '../welcome/welcome.component';
import { VegesAddComponent } from '../veges-add/veges-add.component';
import { VegesListComponent } from '../veges-list/veges-list.component';
import { VegesRoutingModule } from './veges.routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { VegetableEffects } from '../state/vegetable/vegetable.effects';
import { vegetableReducer } from '../state/vegetable/vegetable.reducer';



@NgModule({
  declarations: [
    WelcomeComponent,
    VegesListComponent,
    VegesAddComponent,
   
  ],
  imports:  [
    CommonModule,FormsModule,ReactiveFormsModule,VegesRoutingModule,
    StoreModule.forFeature('veges', vegetableReducer),
    EffectsModule.forFeature([VegetableEffects])]

})
export class VegesModule { } 
