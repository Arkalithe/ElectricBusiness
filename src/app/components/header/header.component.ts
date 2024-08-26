import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  LoggedIn: false | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  isLoggedIn() {
    return this.LoggedIn;
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  goToStations() {
    this.router.navigate(['stations']);
  }
}
