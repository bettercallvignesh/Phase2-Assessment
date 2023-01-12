import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { IVegetable } from "../veges-list/veges";

@Injectable({
    providedIn:'root'
})
export class LoggingService{
    veges: any;
    http: any;
    url: any;
    getLogging(){
       return "login sucess";
    }
}