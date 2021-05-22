import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { baseUrl } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getCurrentLocation(lat: number, long: number) {
    return this.http.get(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${long}`
    );
  }

  getStashNearestLocation(location: string) {
    return this.http.get(`${baseUrl}stash`, {
      params: {
        location: location,
      },
    });
  }

  submitFoodStashEntry($data: any): Observable<any> {
    return this.http.post(`${baseUrl}entry`, $data);
  }
}
