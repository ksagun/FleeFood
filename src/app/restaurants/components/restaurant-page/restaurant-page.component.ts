import { Component, OnInit } from '@angular/core';
import { RestaurantFacadeService } from '../../services/restaurant-facade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css'],
})
export class RestaurantPageComponent implements OnInit {
  storeName: string;
  storeId: string;
  restaurant$;
  restaurantBannerImage: string;
  isLoading$: Observable<boolean>;
  category: any[] = [];
  menu: any[] = [];

  constructor(
    private restaurantFacadeService: RestaurantFacadeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.category = []; 
    let a = [];
    this.storeName = this.route.snapshot.paramMap.get('name');
    this.storeId = this.route.snapshot.paramMap.get('id');
    this.restaurant$ = this.restaurantFacadeService.restaurant$;
    this.isLoading$ = this.restaurantFacadeService.restaurantListLoading$;

    this.restaurantFacadeService.getRestaurant(
      this.removeSeperator(this.storeName),
      this.storeId
    );

    this.restaurant$.subscribe((s) => {
      if (s) {
        this.restaurantBannerImage = s[0].bannerImage;
        s.forEach(row => {
          this.menu = row.menu;
          row.menu.forEach(cat => {
            a.push(cat.category);
          });
        });

        //Remove duplicates
        this.category = a.filter((v,i) => a.indexOf(v) == i);
      }
    });

    // if (!this.storeName.includes('%')) {
    //   this.router.navigate(['/']);
    // }
  }

  removeSeperator(text: string) {
    var t = text.replace(/-/g, ' ');
    return t;
  }

  formatTime(time){
      let now = new Date().toISOString();
      let f = now.split("T")[0] + "T" + time + "Z";
      let t = new Date(f);

      let timef = time.split(":");
      return timef[0] + ":" + timef[1];
  }
}
