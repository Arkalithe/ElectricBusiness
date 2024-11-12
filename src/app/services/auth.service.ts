import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api';
  private tokenSubject = new BehaviorSubject<string | null>(null);
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  constructor() {
    this.initializeToken();
  }

  private initializeToken(): void {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      this.tokenSubject.next(savedToken);
    }
  }

  get token(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<{ token: string }>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap((response) => {
          const token = response.message;
          const userId = response.userId;
          console.log('Token received:', token);
          console.log('User ID received:', userId);
          localStorage.setItem('token', token);
          localStorage.setItem('OwnerId', userId);
          this.tokenSubject.next(token);
        }),
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
