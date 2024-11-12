import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModele } from '../modele/user.modele';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/users';
  // private user$: Observable<UserModele[]> | undefined;

  getUsers(userDetails: {
    email: string;
    password: string;
  }): Observable<UserModele[]> {
    return this.http.post<any>(this.apiUrl, userDetails);
  }

  // getUserLocalisations(): LocalisationModele[] {
  //   return LOCALISATIONS;
  // }
  //
  // getUserByUuid(uuid: string): Observable<UserModele | undefined> {
  //
  //   const user = USERS.find(u => u.uuid === uuid);
  //   return of(user);
  // }
}
