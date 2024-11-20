import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { MediaModele } from '../../modele/media.modele';
import { HttpClient } from '@angular/common/http';
import { UserModele } from '../../modele/user.modele';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private apiUrl = `${environment.API_URL}/medias`;
  private readonly http = inject(HttpClient);

  updateMedia(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, id);
  }

  deleteMedia(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  createMedia(mediaModele: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}`, mediaModele);
  }
}
