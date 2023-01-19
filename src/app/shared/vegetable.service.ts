import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from "rxjs";
import { IVegetable } from "../veges-list/veges";

@Injectable({
    providedIn:'root'
})
export class VegetableService{
search: any;
foundIndex:number=0;
public url="api/veges";
veges:IVegetable[]=[];
private selectedVegetableSource= new BehaviorSubject<IVegetable | null >(null);
//conventionally you can put $ to the var if it is a Observable
selectedVegetableChanges$=this.selectedVegetableSource.asObservable();
constructor(private http:HttpClient){}
   getVegetables():Observable<IVegetable[]>{
        return this.http.get<IVegetable[]>(this.url).pipe(
          tap(data=>{console.log(data);
            //we are assigning data to this.vegetables
            this.veges=data;
            }),
            catchError(this.errorHandler)
          );
     }
      // a method newVegetable which acts like a constructor of creating a new Vegetable
      //what is name of the method -- newVegetable
      //how many args --zero args
      //return type IVegetable
    
      newVegetable():IVegetable{
      //logic should focus on sending back a IVegetable
        return {
    
             id:100,
            name:'spinach',
            category:'dark-green',
            imageUrl:'../assets/images/Spinach-darkgreen.jpg',
            price:34,
            quantity:4
           
    
        };
    
      }
      changeSelectedVegetable(selectedVegetable:IVegetable | null):void{
    
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
           
           
             }
             createVegetable(item:IVegetable):Observable<IVegetable>{
    
              const headers= new HttpHeaders({'Content-Type':'application/json'});
          
            
                const newVegetable={...item,id:null};
      
                console.log(`in create method  ${this.url}`)
                return     this.http.post<IVegetable>(this.url,newVegetable,{headers})
                .pipe(
                  tap(data=>{
          
                   console.log('in create new animal'+ JSON.stringify(data));
                   //pushing the new data new Product to the products array
                  //  this.animals.push(data);
                  console.log(JSON.stringify(this.veges));
          
                  },
                  catchError(this.errorHandler)
                  )
                )
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
          },
          catchError(this.errorHandler))
        );
      }
      getVegetableById(id:number):Observable<IVegetable>{
        return this.getVegetables().pipe(
          tap(()=>{console.log('fetch item'+id);
           this.foundIndex =this.veges.findIndex(item1=>item1.id ==id);
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
        tap(()=>{ console.log('update item'+item.id);
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