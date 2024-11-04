import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { UserRole } from '../../enum/UserRole';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    let expectedRole = route.data['expectedRole'] as UserRole;
    return this.authService.role.pipe(
      take(1),
      map((userRole) => {
        if (!this.authService.isLoggedIn) {
          this.router.navigate(['/login']);
          return false;
        }
        if (
          expectedRole &&
          userRole !== expectedRole &&
          userRole !== UserRole.ROLE_FIRST
        ) {
          this.router.navigate(['**']);
          return false;
        }
        return true;
      }),
    );
  }
}
