import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { VegetableService } from '../shared/vegetable.service';

import { State } from '../state/vegetable/vegetable.state';
import { IVegetable } from '../veges-list/veges';
import * as VegetableActions from '../state/vegetable/vegetable.actions';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getCurrentVegetable, getError, getVegetables } from '../state/vegetable/vegetable.selector';
import { VegetableaddService } from '../shared/vegetableadd.service';
import { AdminAddComponent } from '../admin-add/admin-add.component';
@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  title1:string='admin';
   veges:IVegetable[]=[];
  errorMessage:string='';
  sub!:Subscription;
  selectedVegetable!:IVegetable |null;
  public vegesList : any ;
 /*  public filterCategory : any; */
  filterCategory:IVegetable[]=[];
  item!:IVegetable;
  searchKey:string ="";
  href:string='';
  dataReceived=this.vegetableService.getVegetables();
  title:string=" ";
pageTitle:string="admin List "
filterValue!:string;
obsVegetables$!:Observable<IVegetable[]>;
veges$!:Observable<IVegetable[]>;
selectedVegetable$!:Observable<any>;
errorMessage$!: Observable<string>;
  @Output() OnVegetableSelection:EventEmitter<IVegetable>=new EventEmitter<IVegetable>();
  @Output() onEditVegetable=new EventEmitter<IVegetable>();
// public  api: any;

  constructor(private vegetableService : VegetableService,private store:Store<State>,private router:Router) { }
  ngOnInit(): void {
    this.href=this.router.url;

    this.veges$ = this.store.select(getVegetables);
    this.veges$.subscribe(resp=>this.filterCategory=resp);
    // Do NOT subscribe here because it uses an async pipe
    this.errorMessage$ = this.store.select(getError);

    this.store.dispatch(VegetableActions.loadVegetables());

    // Do NOT subscribe here because it uses an async pipe
    this.selectedVegetable$ = this.store.select(getCurrentVegetable);


    this.vegetableService.getVegetables()
    .subscribe((res: IVegetable[])=>{
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
     this.store.dispatch(VegetableActions.filterVegetablesSuccess({veges:this.vegesList}));


/*     this.vegetableService.search.subscribe((val:any)=>{
       this.searchKey = val;
    }) */

  }
/*   _numcategory:string='';

  id=111; 
  get numcategory():string{
    return this._numcategory;
  }
  set numcategory(val:string){
    this._numcategory=val;
    console.log('in setter',val);
    this.filterCategory=this.filterData(val);
    console.log('in setter',this.filterCategory);
  }

  filterData(val:string):IVegetable[]{
    val=this.numcategory;
    return this.veges.filter((item:IVegetable)=>item.category==val);
  }
 */

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
  onSelect(item:IVegetable){
    this.OnVegetableSelection.emit(item);
   }
/*    addtocart(item: any){
    this.vegetableaddService.addtoCart(item);
     this.store.dispatch(VegetableActions.updateVegetableSuccess({item}));
    console.log(item); 

 } */

  newVegetable():void{
    console.log('in new product');
   
// this.vegetableService.changeSelectedVegetable(this.vegetableService.newVegetable());
 /*     console.log('back to newProduct from service '); */
     this.store.dispatch(VegetableActions.initializeCurrentVegetable());
     this.router.navigate([this.href,'admin-add']);
   }
  //  itemSelected(item:IVegetable):void{
 
  //   this.store.dispatch(VegetableActions.setCurrentVegetable({currentVegetableId:item.id}));
  //  }
   getVegetableById(id:number):IVegetable{
    this.vegetableService.getVegetableById(id).subscribe(resp=>this.item=resp);
    return this.item;
  }
  updateVegetable(item:IVegetable):void{
    if(item && item.id){

      if(confirm(`Are you sure you want to delete ${item.name} details`)){


        this.store.dispatch(VegetableActions.updateVegetable({ item}));
      /*   this.productService.deleteProduct(product.id).subscribe(
          resp=>this.productService.changeSelectedProduct(null),
          err=>this.errorMessage=err 
        );*/
      }
      else{
        this.store.dispatch(VegetableActions.clearCurrentVegetable());
        // this.productService.changeSelectedProduct(null)
      }
    }

  }

  itemSelected(item:IVegetable):void{
    this.store.dispatch(VegetableActions.setCurrentVegetable({currentVegetableId:item.id}));
    this.router.navigate([this.href,'admin-add']);
  }


  deleteVegetable(item:IVegetable):void{
    if(item && item.id){

      if(confirm(`Are you sure you want to delete ${item.name} details`)){


        this.store.dispatch(VegetableActions.deleteVegetable({ itemId: item.id }));
      /*   this.productService.deleteProduct(product.id).subscribe(
          resp=>this.productService.changeSelectedProduct(null),
          err=>this.errorMessage=err 
        );*/
      }
      else{
        this.store.dispatch(VegetableActions.clearCurrentVegetable());
        // this.productService.changeSelectedProduct(null)
      }
    }

  }
}

