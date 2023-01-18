import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { getTestBed, inject, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";

import { of } from "rxjs";
import { IVegetable } from "../veges-list/veges";
import { VegetableService } from "./vegetable.service";


describe('VegetableService',()=>{
    let service:VegetableService;

    let injector: TestBed;

  let httpMock: HttpTestingController;
let res:any[];
let  veges:any[]=[];
afterEach(() => {
  httpMock.verify();
});
  beforeEach(()=>{
     TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule,FormsModule],
        providers:[VegetableService],
     });
     service=TestBed.get(VegetableService);
     injector = getTestBed();

     httpMock = injector.get(HttpTestingController);
     veges =[

        {

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
          }];
  });
  it('should be created',()=>{
    expect(service).toBeTruthy();
  })
  it('should getAllVegetables',
    inject([HttpTestingController,VegetableService],
      (httpMock:HttpTestingController,service:VegetableService)=>{


    


      service.getVegetables().subscribe(resp=>expect(veges).toEqual(resp));


      const mockReq = httpMock.expectOne(service.url);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(veges);

      httpMock.verify();
    }
  )); 
  it('should get vegetable by id',()=>{
    let response:IVegetable;


   let item ={

    "id":101,
    "name":"spinach",
    "category":"dark-green",
    "imageUrl":"../assets/images/Spinach-darkgreen.jpg",
   "price":40,
   "quantity":4
  };

    const fn=spyOn(service, 'getVegetableById').and.returnValue(of(item));

    service.getVegetableById(101).subscribe(res=>{response=res;expect(response).toEqual(item);});

   expect(fn).toHaveBeenCalled();

});
it('createVegetable() should post a vegetable and    return that new vegetable  as data',()=>{


    const item:IVegetable={

        id:101,
        name:"spinach",
        category:"dark-green",
        imageUrl:"../assets/images/Spinach-darkgreen.jpg",
       price:40,
       quantity:4
      };


    const item2:IVegetable ={

        id:101,
        name:"spinach",
        category:"dark-green",
        imageUrl:"../assets/images/Spinach-darkgreen.jpg",
       price:40,
       quantity:4
 

     };

    veges =[...veges,item];
     service.createVegetable(item).subscribe(resp=>expect(resp).toEqual(item));
     expect(veges.length).toEqual(4);

     const req = httpMock.expectOne(service.url);
     expect(req.request.method).toBe('POST');
     //here the item is the response flushed , as the response body 
     req.flush(item);

     });
})
