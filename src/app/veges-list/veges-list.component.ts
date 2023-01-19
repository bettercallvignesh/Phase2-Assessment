import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VegetableService } from '../shared/vegetable.service';
import { VegetableaddService } from '../shared/vegetableadd.service';
import { Store } from '@ngrx/store';
import * as VegetableActions from '../state/vegetable/vegetable.actions';
import { State } from '../state/vegetable/vegetable.state';
import { IVegetable } from 'src/app/veges-list/veges';
import { Router } from '@angular/router';
import { getCurrentVegetable } from '../state/vegetable/vegetable.selector';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-veges-list',
  templateUrl: './veges-list.component.html',
  styleUrls: ['./veges-list.component.css']
})
export class VegesListComponent implements OnInit{
  title:string="list";
  selectedVegetable$!:Observable<any>;
  public vegesList : any ;
  public filterCategory : any;
  // itemquantity:number=1;
  searchKey:string ="";
  @Output() OnVegetableSelection:EventEmitter<IVegetable>=new EventEmitter<IVegetable>();

  constructor(private api : VegetableService, private vegetableaddService : VegetableaddService,private store:Store<State>,private router:Router,) { }
  ngOnInit(): void {
    this.api.getVegetables()
    .subscribe(res=>{
      this.vegesList = res;
      this.filterCategory = res;
      this.vegesList.forEach((a:any) => {
        if(a.category ==="dark-green"){
           a.category ="dark-green"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.vegesList)
    });
   /*   this.store.dispatch(VegetableActions.filterVegetablesSuccess({veges:this.vegesList})); */


    this.vegetableaddService.search.subscribe((val:any)=>{
       this.searchKey = val;
    })

  }
  addtocart(item: any){
     this.vegetableaddService.addtoCart(item);
      this.store.dispatch(VegetableActions.updateVegetableSuccess({item}));
    //  console.log(item); 

  }
  onSelect(item:IVegetable){
    this.OnVegetableSelection.emit(item);
   
   }
 
  vegetableSelected(item:IVegetable):void{
    /*  this.productService.changeSelectedProduct(product); */
    this.store.dispatch(VegetableActions.setCurrentVegetable({currentVegetableId:item.id}));
    console.log(item);
    this.selectedVegetable$ = this.store.select(getCurrentVegetable);
    // this.store.dispatch(VegetableActions.initializeCurrentVegetable());
    }
  filter(category:string){
    this.filterCategory = this.vegesList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
    // this.store.subscribe(()=>console.log(store.getVegetables()))
    console.log(this.filterCategory);
     this.store.dispatch(VegetableActions.filterVegetablesSuccess({veges:this.filterCategory}));
  }
}

