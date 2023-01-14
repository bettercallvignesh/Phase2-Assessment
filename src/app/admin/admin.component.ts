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
@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
   veges:IVegetable[]=[];
  errorMessage:string='';
  sub!:Subscription;
  selectedVegetable!:IVegetable |null;
  public vegesList : any ;
  public filterCategory : any;
  // filterCategory:IVegetable[]=[];
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
public  api: any;

  constructor(private vegetableService : VegetableService,private vegetableaddService : VegetableaddService,private store:Store<State>,private router:Router) { }
  ngOnInit(): void {
    this.href=this.router.url;

    this.veges$ = this.store.select(getVegetables);
    this.veges$.subscribe(resp=>this.filterCategory=resp);
    // Do NOT subscribe here because it uses an async pipe
    this.errorMessage$ = this.store.select(getError);

    this.store.dispatch(VegetableActions.loadVegetables());

    // Do NOT subscribe here because it uses an async pipe
    this.selectedVegetable$ = this.store.select(getCurrentVegetable);


    this.api.getVegetables()
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


    this.vegetableService.search.subscribe((val:any)=>{
       this.searchKey = val;
    })

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
  onSelect(item:IVegetable){
    this.OnVegetableSelection.emit(item);
   }
   addtocart(item: any){
    this.vegetableaddService.addtoCart(item);
     this.store.dispatch(VegetableActions.updateVegetableSuccess({item}));
   //  console.log(item); 

 }
  newVegetable():void{
    console.log('in new product');
   
 // this.vegetableService.changeSelectedVegetable(this.vegetableService.newVegetable());
 /*     console.log('back to newProduct from service '); */
     this.store.dispatch(VegetableActions.initializeCurrentVegetable());
     this.router.navigate([this.href,'admin-add']);
   }
   itemSelected(item:IVegetable):void{
    // this.animalService.changeSelectedAnimal(animal);
    this.store.dispatch(VegetableActions.setCurrentVegetable({currentVegetableId:item.id}));
   }
}
