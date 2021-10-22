import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantStateModule } from './restaurant-state.module';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsPageComponent } from './components/restaurants-page/restaurants-page.component';
import { NavMenuListComponent } from './components/nav-menu-list/nav-menu-list.component';
import { SharedModule } from '../shared/shared.module';
import { RestaurantPageComponent } from './components/restaurant-page/restaurant-page.component';

@NgModule({
  declarations: [
    RestaurantsPageComponent,
    NavMenuListComponent,
    RestaurantPageComponent,
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    RestaurantStateModule,
    SharedModule,
  ],

  exports: [NavMenuListComponent],
})
export class RestaurantsModule {}
