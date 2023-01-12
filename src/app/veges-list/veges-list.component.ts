import { Component, OnInit } from '@angular/core';
import { VegetableService } from '../shared/vegetable.service';
import { VegetableaddService } from '../shared/vegetableadd.service';

@Component({
  selector: 'app-veges-list',
  templateUrl: './veges-list.component.html',
  styleUrls: ['./veges-list.component.css']
})
export class VegesListComponent implements OnInit{

  public vegesList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api : VegetableService, private vegetableaddService : VegetableaddService) { }
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

    this.vegetableaddService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.vegetableaddService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.vegesList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }



}

