import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss', '../../assets/bootstrap.css']
})
export class CarPageComponent implements OnInit {

  public id: string;
  public name: string;
  public color: string;
  public year: string;
  public hash: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
    this.color = this.route.snapshot.queryParams['color'];
    this.year = this.route.snapshot.queryParams['year'];
    this.hash = this.route.snapshot.fragment;

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.name = params['name'];
    });

    this.route.queryParams.subscribe((params: Params) => {
      this.color = params['color'];
      this.year = params['year'];
    });
  }

  public openMazdaPage() {
    this.router.navigate(['/cars', 8, 'Mazda'], {
      queryParams: {
        color: 'pink',
        year: 2016,
      },
      fragment: 'pic'
    });
  }

}
