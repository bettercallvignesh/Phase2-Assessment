import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VegesAddComponent } from "../veges-add/veges-add.component";

const vegesRoutes: Routes = [

  { path: 'veges-add', component: VegesAddComponent},

];

@NgModule({
  imports: [

    RouterModule.forChild(vegesRoutes),],
  exports:[RouterModule]})
export class VegesRoutingModule{

} 