import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarPageComponent } from './car-page/car-page.component';
import { CarsPageComponent } from './cars-page.component';
import { CarsService } from '../cars.service';
import { CarsRoutingModule } from './cars-routing.module';

@NgModule({
  declarations: [
    CarPageComponent,
    CarsPageComponent,
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
  ],
  providers: [
    CarsService,
  ]
})

export class CarsModule {

}
