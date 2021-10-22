import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getRestaurantList(params: any) {
    return this.http.get(`${baseUrl}restaurants`, {
      params: {
        location: params.location,
        lng: params.lng,
        lat: params.lat,
      },
    });
  }

  getRestaurant(params: any) {
    return this.http.get(`${baseUrl}restaurant`, {
      params: {
        name: params.name,
        id: params.id,
      },
    });
  }
}
