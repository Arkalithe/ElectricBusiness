import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChargingStation } from '../modele/charginStation.modele';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Page } from '../modele/page.modele';

@Injectable({
  providedIn: 'root',
})
export class ChargingStationService {
  private apiUrl = 'http://localhost:8080/api/chargingstations';
  private apiOwner = 'http://localhost:8080/api/chargingstations/owner';
  private readonly http = inject(HttpClient);

  getChargingStations(): Observable<ChargingStation[]> {
    return this.http.get<ChargingStation[]>(this.apiUrl);
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
}
