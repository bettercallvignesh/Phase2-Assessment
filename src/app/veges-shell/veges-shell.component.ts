import { Component, OnInit } from '@angular/core';

import { VegetableaddService } from '../shared/vegetableadd.service';

@Component({
  selector: 'app-veges-shell',
  templateUrl: './veges-shell.component.html',
  styleUrls: ['./veges-shell.component.css']
})
export class VegesShellComponent implements OnInit{
  title:string="veges";
  public totalItem : number = 0;
  public searchTerm !: string;
  constructor(private vegetableaddService : VegetableaddService) { }
  ngOnInit(): void {
    this.vegetableaddService.getVegetables()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
 /*  this in used inside vegeslist to search name,to append to the value */
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.vegetableaddService.search.next(this.searchTerm);
  }

}
