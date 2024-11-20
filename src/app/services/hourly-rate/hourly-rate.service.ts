import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingModele } from '../../modele/booking.modele';
import { HourlyRateModele } from '../../modele/hourlyRate.modele';

@Injectable({
  providedIn: 'root',
})
export class HourlyRateService {
  private apiUrl = `${environment.API_URL}/hourlyrates`;
  private readonly http = inject(HttpClient);

  updateHourlyRate(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, id);
  }

  getHourlyRateById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteHourlyRate(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  createHourlyRate(hourlyRateModele: HourlyRateModele): Observable<any> {
    return this.http.post(`${this.apiUrl}`, hourlyRateModele);
  }
  getHourlyRate(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
