import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss', '../../assets/bootstrap.css']
})
export class HomePageComponent {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  public openCarsPage() {
    this.router.navigate(['/cars']);
  }

  public changeAuthStatus(status: string) {
    if (status === 'login') {
      this.auth.logIn();
    } else if (status === 'logout') {
      this.auth.logOut();
    }
  }
}
