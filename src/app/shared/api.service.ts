import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RestaurantModel } from '../restaurantModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private_url : string =  "http://localhost:3000/posts"
  
  constructor(private _http: HttpClient) { }
  // Now here i will define the POST, GET, PUT & DELETE Methods

  getRestaurants(): Observable<RestaurantModel[]> { 
    return  this._http.get<RestaurantModel[]>(this.private_url)
  }
}
