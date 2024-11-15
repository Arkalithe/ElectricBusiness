import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChargingStation } from '../modele/charginStation.modele';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Page } from '../modele/page.modele';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ChargingStationService {
  private apiUrl = `${environment.API_URL}/chargingstations`;
  private apiOwner = `${environment.API_URL}/chargingstations/owner`;
  private apiSearch = `${environment.API_URL}/chargingstations/search`;

  private readonly http = inject(HttpClient);

  getChargingStations(): Observable<ChargingStation[]> {
    return this.http.get<ChargingStation[]>(this.apiUrl);
  }

  getChargingStationById(id: string): Observable<ChargingStation> {
    return this.http.get<ChargingStation>(`${this.apiUrl}/${id}`);
  }

  getChargingStationsByOwner(
    page: number,
    size: number,
  ): Observable<Page<ChargingStation>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<Page<ChargingStation>>(this.apiOwner, { params });
  }

  getChargingStationBySearch(query: string): Observable<ChargingStation[]> {
    let params = new HttpParams().set('query', query);
    return this.http.get<ChargingStation[]>(this.apiSearch, { params });
  }
}
