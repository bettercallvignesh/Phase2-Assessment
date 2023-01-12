import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class VegetableaddService{
    public cartItemList : any =[]
  public vegesList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getVegetables(){
    return this.vegesList.asObservable();
  }
  
  setVegetable(vegetable: any){
    this.cartItemList.push(...vegetable);
    this.vegesList.next(vegetable);
  }
  addtoCart(vegetable : any){
    this.cartItemList.push(vegetable);
    this.vegesList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(vegetable: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(vegetable.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.vegesList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.vegesList.next(this.cartItemList);
  } 
}