import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { IVegetable } from "./veges-list/veges";

@Injectable({
    providedIn:'root'
})
export class InMemoryEventDbService implements InMemoryDbService{
   createDb(){
        const veges:IVegetable[]=[{

            "id":101,
            "name":"spinach",
            "category":"dark-green",
            "imageUrl":"../assets/images/Spinach-darkgreen.jpg",
           "price":40
          },
          {
            "id":102,
            "name":"boychoy",
            "category":"dark-green",
            "imageUrl":"../assets/images/boychoy-darkgreen.jpg",
           "price":30
          },
          {
            "id":103,
            "name":"broccoli",
            "category":"dark-green",
            "imageUrl":"../assets/images/Broccoli-darkgreen.jpg",
           "price":35
          },
          {
            "id":201,
            "name":"tomato",
            "category":"red-orange",
            "imageUrl":"../assets/images/tomato.jpg",
           "price":100
          },
          {
            "id":202,
            "name":"carrot",
            "category":"red-orange",
            "imageUrl":"../assets/images/carrot.jpg",
           "price":60
          },
          {
            "id":203,
            "name":"pumpkin",
            "category":"red-orange",
            "imageUrl":"../assets/images/pumpkin.jpg",
           "price":70
          },
          {
            "id":301,
            "name":"beetroot",
            "category":"starchy",
            "imageUrl":"../assets/images/beetroot.jpg",
           "price":10
          },
          {
            "id":302,
            "name":"parsnips",
            "category":"starchy",
            "imageUrl":"../assets/images/parsnips.jpg",
           "price":50
          },
          {
            "id":303,
            "name":"sweatpotato",
            "category":"starchy",
            "imageUrl":"../assets/images/sweatpotato.jpg",
           "price":66
          
        }];


        return {veges};
    }
    
}

