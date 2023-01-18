import {  CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  exports: [
     MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule
  ] ,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialModule { }
