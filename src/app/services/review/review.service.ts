import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReviewModele } from '../../modele/review.modele';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private apiUrl = `${environment.API_URL}/reviews`;
  private readonly http = inject(HttpClient);

  updateReview(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, id);
  }

  deleteReview(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  createReview(reviewModele: ReviewModele): Observable<any> {
    return this.http.post(`${this.apiUrl}`, reviewModele);
  }
}
