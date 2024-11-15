import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModele } from '../modele/user.modele';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);
  private apiUrl = `${environment.API_URL}`;

  getUserById(id: string): Observable<UserModele> {
    return this.http.get<UserModele>(`${this.apiUrl}/users/${id}`);
  }

  updateUser(id: string, user: UserModele): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/${id}`, user);
  }
}
