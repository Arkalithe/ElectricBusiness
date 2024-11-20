import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FavoriteModele } from '../../modele/favorite.modele';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private apiUrl = `${environment.API_URL}/favorites`;
  private readonly http = inject(HttpClient);

  createFavorite(favoriteModele: FavoriteModele): Observable<any> {
    return this.http.post(`${this.apiUrl}`, favoriteModele);
  }
}
