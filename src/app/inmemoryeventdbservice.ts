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
           "price":40,
           "quantity":4
          },
          {
            "id":102,
            "name":"boychoy",
            "category":"dark-green",
            "imageUrl":"../assets/images/boychoy-darkgreen.jpg",
           "price":30,
           "quantity":3
          },
          {
            "id":103,
            "name":"broccoli",
            "category":"dark-green",
            "imageUrl":"../assets/images/Broccoli-darkgreen.jpg",
           "price":35,
           "quantity":4
          },
          {
            "id":201,
            "name":"tomato",
            "category":"red-orange",
            "imageUrl":"../assets/images/tomato.jpg",
           "price":100,
           "quantity":4
          },
          {
            "id":202,
            "name":"carrot",
            "category":"red-orange",
            "imageUrl":"../assets/images/carrot.jpg",
           "price":60,
           "quantity":4
          },
          {
            "id":203,
            "name":"pumpkin",
            "category":"red-orange",
            "imageUrl":"../assets/images/pumpkin.jpg",
           "price":70,
           "quantity":4
          },
          {
            "id":301,
            "name":"beetroot",
            "category":"starchy",
            "imageUrl":"../assets/images/beetroot.jpg",
           "price":10,
           "quantity":4
          },
          {
            "id":302,
            "name":"parsnips",
            "category":"starchy",
            "imageUrl":"../assets/images/parsnips.jpg",
           "price":50,
           "quantity":4
          },
          {
            "id":303,
            "name":"sweatpotato",
            "category":"starchy",
            "imageUrl":"../assets/images/sweatpotato.jpg",
           "price":66,
           "quantity":4
           
          
        }];


        return {veges};
    }
    
}

