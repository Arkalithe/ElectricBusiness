import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingModele } from '../../modele/booking.modele';
import { LocalisationModele } from '../../modele/localisation.modele';

@Injectable({
  providedIn: 'root',
})
export class LocalisationService {
  private apiUrl = `${environment.API_URL}/localisations`;
  private readonly http = inject(HttpClient);

  updateLocalisation(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, id);
  }

  createLocalisation(localisationModele: LocalisationModele): Observable<any> {
    return this.http.post(`${this.apiUrl}`, localisationModele);
  }

  getLocalisation(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
