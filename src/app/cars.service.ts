import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  carnum:number=0
  searchcar:string=''
  constructor(private http:HttpClient) {
   this.getallcars()
   this.getnumofcars(this.carnum)
   this.getcarbysearch(this.searchcar)
  }
  getallcars():Observable<any>{
   return this.http.get('https://www.freetestapi.com/api/v1/cars')
  }
  getnumofcars(carnum:number):Observable<any>{
   return this.http.get(`https://www.freetestapi.com/api/v1/cars?limit=${carnum}`)
  }
  getcarbyid(id:number):Observable<any>{
   return this.http.get(`https://www.freetestapi.com/api/v1/cars/${id}`)
  }
  getcarbysearch(searchcar:string):Observable<any>{
   return this.http.get(`https://www.freetestapi.com/api/v1/cars?search=${searchcar}`)
  }
}
