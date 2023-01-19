
import { Injectable } from "@angular/core";
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