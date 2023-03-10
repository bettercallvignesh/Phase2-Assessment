import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { VegetableaddService } from '../shared/vegetableadd.service';
import { State } from '../state/vegetable/vegetable.state';
import * as VegetableActions from '../state/vegetable/vegetable.actions';
import { IVegetable } from '../veges-list/veges';
import { provideCloudflareLoader } from '@angular/common';
@Component({
  selector: 'app-veges-add',
  templateUrl: './veges-add.component.html',
  styleUrls: ['./veges-add.component.css']
})
export class VegesAddComponent implements OnInit {
  title2:string="add";
  itemquantity:number=1;
  public veges : any = [];
  cartItemList:IVegetable[]=[];
  total=0
  public grandTotal : number=0; 
  constructor(private vegetableaddService : VegetableaddService,private store:Store<State>) { }
  ngOnInit(): void {
    this.vegetableaddService.getVegetables()
    .subscribe(res=>{
      this.veges= res;
      this.grandTotal = this.vegetableaddService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.vegetableaddService.removeCartItem(item);
    this.store.dispatch(VegetableActions.deleteVegetable({itemId:0}));
  }
  emptycart(){
    this.vegetableaddService.removeAllCart();
    this.store.dispatch(VegetableActions.deleteVegetableSuccess({itemId:0}));
  }
   
} 