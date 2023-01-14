import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { VegetableaddService } from '../shared/vegetableadd.service';
import { State } from '../state/vegetable/vegetable.state';
import * as VegetableActions from '../state/vegetable/vegetable.actions';
import { IVegetable } from '../veges-list/veges';
@Component({
  selector: 'app-veges-add',
  templateUrl: './veges-add.component.html',
  styleUrls: ['./veges-add.component.css']
})
export class VegesAddComponent implements OnInit {



/* totalPrice:number=0; */
  public veges : any = [];
  cartItemList:IVegetable[]=[];
 public grandTotal : number=0; 
//  totalQuantity:number=0;
  constructor(private vegetableaddService : VegetableaddService,private store:Store<State>) { }
  ngOnInit(): void {
    // this.listCartdetails();
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
/*   incrementQuantity(cartItemList:IVegetable)
{
  this.vegetableaddService.addtoCart(cartItemList);
}
listCartdetails(){
  this.cartItemList=this.vegetableaddService.cartItemList;

 
 
} */
}