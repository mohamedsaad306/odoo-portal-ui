import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment.prod';





@Injectable()
export class ProductsServiceService {

   
  constructor(private http:HttpClient) { }
  
  getLocations() {
 
    // return this.http.get('http://localhost:3000/getdata');
    return this.http.get('http://localhost:3000/getdata');
  }
}
