import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'nav[app-header]',
  standalone: true,
  imports: [SearchComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private readonly authService = inject(AuthService);
  loggedIn: boolean = false;

  isLoggedIn() {
    if (this.authService.isAuthenticated()) {
      this.loggedIn = true;
    }
    return this.loggedIn;
  }

  logout() {
    this.authService.logout();
    this.loggedIn = false;
  }
}
