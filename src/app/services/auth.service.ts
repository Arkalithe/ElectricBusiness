import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserModele } from '../modele/user.modele';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.API_URL}`;
  private tokenSubject$: BehaviorSubject<string> = new BehaviorSubject<string>(
    null,
  );
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  constructor() {
    this.initializeToken();
  }

  private initializeToken(): void {
    const savedToken = localStorage.getItem(
      environment.LOCALISATION_KEYS.TOKEN,
    );
    if (savedToken) {
      this.tokenSubject$.next(savedToken);
    }
  }

  get token(): string {
    return this.tokenSubject$.value;
  }
  get selectToken(): Observable<string> {
    return this.tokenSubject$.asObservable();
  }

  login(
    email: string,
    password: string,
    keepConnected: boolean,
  ): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/auth/login`, { email, password })
      .pipe(
        tap((response) => {
          const token = response.message;
          if (keepConnected) {
            localStorage.setItem(environment.LOCALISATION_KEYS.TOKEN, token);
          } else {
            sessionStorage.setItem(environment.LOCALISATION_KEYS.TOKEN, token);
          }
          this.tokenSubject$.next(token);
        }),
      );
  }

  logout(): void {
    localStorage.removeItem(environment.LOCALISATION_KEYS.TOKEN);
    sessionStorage.removeItem(environment.LOCALISATION_KEYS.TOKEN);
    this.tokenSubject$.next(null);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return (
      !!localStorage.getItem(environment.LOCALISATION_KEYS.TOKEN) ||
      !!sessionStorage.getItem(environment.LOCALISATION_KEYS.TOKEN)
    );
  }

  register(userModele: UserModele): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, userModele);
  }
}
