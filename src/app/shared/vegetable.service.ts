import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
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
} 