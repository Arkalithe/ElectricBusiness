import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'div[app-header]',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  loggedIn: boolean = false;

  isLoggedIn() {
    if (this.authService.isAuthenticated()) {
      this.loggedIn = true;
    }
    return this.loggedIn;
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  goToStationsAll() {
    this.router.navigate(['stations/charging-station']);
  }

  goToProfile() {
    this.router.navigate(['profile']);
  }

  goToLogin() {
    this.router.navigate(['login']);
  }
  logout() {
    this.authService.logout();
    this.loggedIn = false;
  }
}
