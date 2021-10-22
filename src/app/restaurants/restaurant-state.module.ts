import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { RestaurantFacadeService, RestaurantService } from './services';
import { RESTAURANT_STATE, RestaurantEffect, RestaurantReducer } from './state';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(RESTAURANT_STATE, RestaurantReducer),
    EffectsModule.forFeature([RestaurantEffect]),
  ],
  providers: [RestaurantService, RestaurantFacadeService],
})
export class RestaurantStateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RestaurantStateModule,
      providers: [RestaurantService, RestaurantFacadeService],
    };
  }
}
