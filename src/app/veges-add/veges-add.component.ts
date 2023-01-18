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

/* totalPrice:number=0; */
  public veges : any = [];
  cartItemList:IVegetable[]=[];
  total=0
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
/*   incrementQuantity(item:IVegetable)
{
  this.vegetableaddService.addtoCart(item);
} */
/*  incrementQuantity(id: any, quantity: any) {
  for (let i = 0; i < this.cartItemList.length; i++) {
   if (id == this.cartItemList[i].id) {
  this.cartItemList[i].quantity += 1;
    this.cartItemList[i].price += this.cartItemList[i].price; 
   this.grandTotal += this.cartItemList[i].price;
   }
  else {
   if (this.cartItemList[i].id == id)
   this.vegetableaddService.addtoCart(this.cartItemList);
   }
  }
  }
  decreaseQuantity(id: any, quantity: any) 
  { for (let i = 0; i < this.cartItemList.length; i++) {
    if (id == this.cartItemList[i].id)
     {
      this.cartItemList[i].quantity -= 1;
       this.cartItemList[i].total -= this.cartItemList[i].price;
      this.grandTotal -= this.cartItemList[i].price;
     }
     else {
       this.vegetableaddService.removeCartItem(item);
       }

       }
       
       }
 */





/*       Quantity(value:string){
if(this.itemquantity < 9 && value=="max"){
  this.itemquantity +=1;
}else if(this.itemquantity>1 && value=="min"){
  this.itemquantity -=1;
}

      }  */
   
} 