import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserReviewModele } from '../../modele/userReview.modele';

@Injectable({
  providedIn: 'root',
})
export class UserReviewService {
  private apiUrl = `${environment.API_URL}/userreviews`;
  private readonly http = inject(HttpClient);

  updateUserReview(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, id);
  }

  deleteUserReview(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  createUserReview(userReviewModele: UserReviewModele): Observable<any> {
    return this.http.post(`${this.apiUrl}`, userReviewModele);
  }
}
