import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent],
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

  goToUsers() {
    this.router.navigate(['users']);
  }

  goToStations() {
    this.router.navigate(['stations/historique']);
  }
  goToStationsAll() {
    this.router.navigate(['stations/all']);
  }
  goToStationManagement() {
    this.router.navigate(['stations/add']);
  }

  goToLogin() {
    this.router.navigate(['login']);
  }
}
