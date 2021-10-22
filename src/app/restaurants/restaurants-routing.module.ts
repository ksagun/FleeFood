import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantPageComponent } from './components/restaurant-page/restaurant-page.component';
import { RestaurantsPageComponent } from './components/restaurants-page/restaurants-page.component';

const routes: Routes = [
  {
    path: 'restaurants/:location/:lng/:lat',
    component: RestaurantsPageComponent,
  },
  {
    path: 'restaurant/:id/:name',
    component: RestaurantPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantsRoutingModule {}
