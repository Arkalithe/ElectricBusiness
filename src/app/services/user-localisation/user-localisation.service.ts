import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLocalisationModele } from '../../modele/userLocalisation.modele';

@Injectable({
  providedIn: 'root',
})
export class UserLocalisationService {
  private apiUrl = `${environment.API_URL}/userlocalisation`;
  private readonly http = inject(HttpClient);

  updateUserLocalisation(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, id);
  }

  createUserLocalisation(
    userLocalisation: UserLocalisationModele,
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}`, userLocalisation);
  }
}
