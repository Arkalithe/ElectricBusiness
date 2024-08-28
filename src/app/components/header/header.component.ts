import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  loggedIn: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected authService: AuthService,
  ) {}

  isLoggedIn() {
    if (this.authService.isLoggedIn) {
      this.loggedIn = true;
    }
    return this.loggedIn;
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  goToStations() {
    this.router.navigate(['stations']);
  }

  goToStationManagement() {
    this.router.navigate(['stations/add']);
  }

  goToLogin() {
    this.router.navigate(['login']);
  }
}
