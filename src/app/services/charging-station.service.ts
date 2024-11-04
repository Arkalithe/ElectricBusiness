import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ChargingStation } from '../modele/charginStation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChargingStationService {
  private apiUrl = 'http://localhost:8080/api/chargingstations';
  private chargingStation$: Observable<ChargingStation[]> | undefined;

  constructor(private http: HttpClient) {}

  getChargingStationsBis(): Observable<ChargingStation[]> {
    this.chargingStation$ = this.http.get<ChargingStation[]>(this.apiUrl);
    return this.chargingStation$;
  }
}
