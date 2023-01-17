import { Component, OnDestroy, OnInit } from '@angular/core';
import { IVegetable } from '../veges-list/veges';
import * as VegetableActions from '../state/vegetable/vegetable.actions';
import { Store } from '@ngrx/store';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VegetableService } from '../shared/vegetable.service';
import { GenericValidator } from '../shared/genericvalidator';
import { Observable, Subscription,tap} from 'rxjs';
import { getCurrentVegetable } from '../state/vegetable/vegetable.selector';
import { State } from '../state/app.state';


@Component({
  selector: 'admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit,OnDestroy{
  // item!:IVegetable | null | undefined;

  pageTitle='Edit Vegetable';
  errorMessage='';
 
  item$!: Observable<IVegetable | null | undefined>;
  addVegetable!: FormGroup;
  item!:IVegetable| null|undefined ;
  sub!:Subscription;
  displayMessage: {[key:string]:string}={};
    private validationMessages!:{[key:string]:{[key:string]:string}};

    private genericValidator!:GenericValidator;
  constructor(private store:Store<State>,private formBuilder: FormBuilder,private router: Router, private vegetableService:VegetableService ) {
 
  this.validationMessages={

    name:{
      required:'Product name is required ',
      minLength:'Product name must have 3 characters',
      maxLength:'Product name must have less than  equal to 10 chars'
    },
    category:{
      required:'Category is required'
    },
    imageUrl:{
      required:'Image is required'
    },
    price:{
      required:'Price is required'
    },
    quantity:{
      required:'quantity is required'
    }


    };
    this.genericValidator=new GenericValidator(this.validationMessages);

 }
 ngOnDestroy(): void {
/*   this.sub.unsubscribe(); */
}
 ngOnInit() {
  console.log('in init of vegetable add ,creating form')
  this.addVegetable = this.formBuilder.group({
    id: [''],
    name: ['',[ Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    category:[[Validators.required]],
    imageUrl:['',[Validators.required]],
    price:[[Validators.required]],
    quantity:[2,[Validators.required]]

  });

  console.log('created add form ')

  // Watch for changes to the currently selected product





//  this.sub=this.vegetableService.selectedVegetableChanges$.subscribe(selProduct=>this.displayVegetable(selProduct));

      this.item$ = this.store.select(getCurrentVegetable)
         .pipe(
    // tap((currentVegetable:any) => {
    //          console.log("hello")
    //        })  
           tap(currentVegetable=> this.displayVegetable(currentVegetable)) 
        );
  this.item$.subscribe(resp=>this.item=resp);
  console.log('selected current product in ng onit add product ',this.item);
      
      this.addVegetable.valueChanges.subscribe(
        () => this.displayMessage =
        this.genericValidator.processMessages(this.addVegetable)
      );
  console.log('value in form changes')

  /* this.sub=this.productService.selectedProductChanges$.subscribe(selProduct=>this.displayProduct(selProduct));*/


  this.addVegetable.valueChanges.
  subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.addVegetable)) 
}
get id(){
  return this.addVegetable.get("id");
}

get name(){
  return this.addVegetable.get("name");
  }

get imageUrl(){
  return this.addVegetable.get("imageUrl");
  }
get category(){
    return this.addVegetable.get("category");
      }
get price(){
    return this.addVegetable.get("price");
      }
      get quantity(){
        return this.addVegetable.get("quantity");
          }   
          blur():void{
            this.displayMessage=this.genericValidator.processMessages(this.addVegetable);
          
            }
              

 displayVegetable(itemParam:IVegetable | null | undefined):void{
  console.log(this.item,'in display vegetable of vegetable add component ');
  console.log(itemParam);
 this.item = itemParam;
 if(this.item){

  this.addVegetable.reset();

  if(this.item.id==0){
    this.pageTitle='Add Vegetable';
  }
  else{

    this.pageTitle=`Edit Vegetable: ${this.item.name}`;

  }

this.addVegetable.patchValue({
id:this.item.id,
 name:this.item.name,
 imageUrl:this.item.imageUrl,
 price:this.item.price,
 category:this.item.category,
 quantity:this.item.quantity


})


 }

}
saveVegetable(originalVegetable:IVegetable ):void{

  if(this.addVegetable.valid){
    if(this.addVegetable.dirty){
      const item={...originalVegetable,...this.addVegetable.value};
      console.log(item,'saveProduct of product add');
    if(item.id==0){
  /*     this.productService.createProduct(product).subscribe(
        (resp)=>{
          this.productService.changeSelectedProduct(resp);
          console.log(resp);},

        (err)=>this.errorMessage=err
      ); */
      this.store.dispatch(VegetableActions.createVegetable({item}));
   }
   else{
    this.store.dispatch(VegetableActions.updateVegetable({item }));
    // this.productService.updateProduct(product).subscribe(
    //  resp=>this.productService.changeSelectedProduct(resp),
    //  err=>this.errorMessage=err      );

   }
    }

    this.router.navigate(['admin'])
  }

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
