import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VegesAddComponent } from "../veges-add/veges-add.component";
import { VegesListComponent } from "../veges-list/veges-list.component";





const vegesRoutes: Routes = [

  { path: 'veges-add', component: VegesListComponent},

];

@NgModule({
  imports: [

    RouterModule.forChild(vegesRoutes),],
  exports:[RouterModule]})
export class VegesRoutingModule{

} 