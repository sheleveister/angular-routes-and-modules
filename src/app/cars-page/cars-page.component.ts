import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.scss', '../../assets/bootstrap.css']
})
export class CarsPageComponent implements OnInit {

  public cars = [];

  constructor(
    private carsService: CarsService,
  ) { }

  ngOnInit() {
    this.cars = this.carsService.cars;
  }

}
