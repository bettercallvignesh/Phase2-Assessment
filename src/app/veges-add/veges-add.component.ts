import { Component, OnInit } from '@angular/core';
import { VegetableaddService } from '../shared/vegetableadd.service';

@Component({
  selector: 'app-veges-add',
  templateUrl: './veges-add.component.html',
  styleUrls: ['./veges-add.component.css']
})
export class VegesAddComponent implements OnInit {

  public veges : any = [];
 public grandTotal !: number; 
  constructor(private vegetableaddService : VegetableaddService) { }
  ngOnInit(): void {
    
    this.vegetableaddService.getVegetables()
    .subscribe(res=>{
      this.veges= res;
      this.grandTotal = this.vegetableaddService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.vegetableaddService.removeCartItem(item);
  }
  emptycart(){
    this.vegetableaddService.removeAllCart();
  }

}