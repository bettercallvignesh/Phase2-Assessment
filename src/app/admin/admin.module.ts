import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAddComponent } from '../admin-add/admin-add.component';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin.routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { VegetableEffects } from '../state/vegetable/vegetable.effects';
import { vegetableReducer } from '../state/vegetable/vegetable.reducer';
import { AdminShellComponent } from '../admin-shell/admin-shell.component';



@NgModule({
  declarations: [
  AdminAddComponent,AdminComponent,AdminShellComponent,AdminShellComponent

],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    AdminRoutingModule,
    StoreModule.forFeature('admin', vegetableReducer),
    EffectsModule.forFeature([VegetableEffects])]
  })
export class AdminModule { }
