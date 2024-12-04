import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChargingStation } from '../../modele/charginStation.modele';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Page } from '../../modele/page.modele';
import { environment } from '../../../environments/environment.development';

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

  getChargingStationCost(id: string): Observable<ChargingStation> {
    return this.http.get<ChargingStation>(`${this.apiUrl}/${id}/calculateCost`);
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

  deleteChargingStation(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateChargingStation(
    id: string,
    chargingStation: ChargingStation,
  ): Observable<any> {
    return this.http.put<ChargingStation>(
      `${this.apiUrl}/${id}`,
      chargingStation,
    );
  }

  createChargingStationWithMedia(
    chargingStation: ChargingStation,
    mediaFiles: File[],
  ): Observable<ChargingStation> {
    const formData = new FormData();

    formData.append(
      'chargingStationDto',
      new Blob([JSON.stringify(chargingStation)], { type: 'application/json' }),
    );

    mediaFiles.forEach((file, index) => {
      formData.append('mediaFiles', file, file.name);
    });

    return this.http.post<ChargingStation>(this.apiUrl, formData);
  }
}
