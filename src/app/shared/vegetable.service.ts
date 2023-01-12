import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, tap, throwError } from "rxjs";
import { IVegetable } from "../veges-list/veges";

@Injectable({
    providedIn:'root'
})
export class VegetableService{
 constructor(private http:HttpClient){}
foundIndex:number=0;
url="api/veges";
veges:IVegetable[]=[];
   getVegetables():Observable<IVegetable[]>{
        return this.http.get<IVegetable[]>(this.url).pipe(
            catchError((error: HttpErrorResponse) => {
              console.error(error);
              return throwError(error);
            })
          );


     }
     /* changeSelectedProduct(selectedVegetable:IVegetable | null):void{
    
      this.selectedVegetableSource.next(selectedVegetable);
    
    }
    
      //errorhandler which returns the Observable with errorMessage
      errorHandler=(err:any)=>{
    
       let errorMessage:string;
       //a client side error or network error then ErrorEvent object will be thrown
    
       if(err.error instanceof ErrorEvent)
         {
    
           errorMessage = `An error has occured ${err.error.message}`
         }
         else{
    
          errorMessage =  `Backend error code ${err.status} ${err.body.error}`;
    
         }
         console.log(err);
         return throwError(errorMessage);
    
    
      } */
    
    
      // a method newProduct which acts like a constructor of creating a new Product
      //what is name of the method -- newProduct
      //how many args --zero args
      //return type IProduct
    
      newVegetable():IVegetable{
      //logic should focus on sending back a IProduct
        return {
    
             id:0,
            name:'spinach',
            category:'dark-green',
            imageUrl:'../assets/images/Spinach-darkgreen.jpg',
            price:34,

    
        };
    
      }
            //errorhandler which returns the Observable with errorMessage
            errorHandler=(err:any)=>{
    
              let errorMessage:string;
              //a client side error or network error then ErrorEvent object will be thrown
           
              if(err.error instanceof ErrorEvent)
                {
           
                  errorMessage = `An error has occured ${err.error.message}`
                }
                else{
           
                 errorMessage =  `Backend error code ${err.status} ${err.body.error}`;
           
                }
                console.log(err);
                return throwError(errorMessage);
           
           
             }
      deleteVegetable(id:number):Observable<{}>{
        const headers= new HttpHeaders({'Content-Type':'application/json'});
    
        //@DeleteMapping deleteAll delete url/id  /api/products/111
        const url= `${this.url}/${id}`;
    
        return this.http.delete<IVegetable>(url,{headers})
        .pipe(
          tap(data=>{
            console.log('deleted veg'+id);
           const foundIndex = this.veges.findIndex(item1=>item1.id===id);
           //if product id is not found means index returned will be -1
        /*    if(foundIndex > -1)
           this.products.splice(foundIndex,1); */
    
    
          },
          catchError(this.errorHandler))
    
    
        );
    
    
    
    
    
      }
      getVegetableById(id:number):Observable<IVegetable>{
        return this.getVegetables().pipe(
          tap(()=>{console.log('fetch item'+id);
           this.foundIndex =this.veges.findIndex(item1=>item1.id ==id);
          /* if(this.foundIndex > -1){
            this.products[this.foundIndex];
              } */
          }),
          map(()=>this.veges[this.foundIndex]),
          catchError(this.errorHandler)
          );
    
    
    
    
    
       }
       updateVegetable(item:IVegetable):Observable<IVegetable>{
        const headers= new HttpHeaders({'Content-Type':'application/json'});
    
        //put http method
        const url= `${this.url}/${item.id}`;
    
        //logic to call http put method to update the item on the given url
        return this.http.put<IVegetable>(url,item, {headers}).pipe(
    
        tap(()=>{console.log('update item'+item.id);
        const foundIndex =this.veges.findIndex(item1=>item1.id === item.id);
        if(foundIndex > -1){
          this.veges[foundIndex]=item;
            }
        }),
        map(()=>item),
        catchError(this.errorHandler)
        );
    
    
    
    
    
    
       }
    

} 