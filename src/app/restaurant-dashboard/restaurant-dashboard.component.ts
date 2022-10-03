import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.scss']
})
export class RestaurantDashboardComponent implements OnInit {
  
  public restaurants = [];

  constructor(private _restservice:ApiService) { }

  ngOnInit(): void {
    this._restservice.getRestaurants().subscribe(data => {
      
      data = this.restaurants
      console.log(this.restaurants)
    })
  }

  addForm = new FormGroup({
    name : new FormControl('')
  })
  
 
}
