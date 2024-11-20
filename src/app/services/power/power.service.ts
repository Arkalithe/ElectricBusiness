import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReviewModele } from '../../modele/review.modele';
import { PowerModele } from '../../modele/power.modele';

@Injectable({
  providedIn: 'root',
})
export class PowerService {
  private apiUrl = `${environment.API_URL}/powers`;
  private readonly http = inject(HttpClient);

  updatePower(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, id);
  }

  deletePower(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  createPower(powerModele: PowerModele): Observable<any> {
    return this.http.post(`${this.apiUrl}`, powerModele);
  }
  getPower(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
