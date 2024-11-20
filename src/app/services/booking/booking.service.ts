import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingModele } from '../../modele/booking.modele';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private apiUrl = `${environment.API_URL}/bookings`;
  private readonly http = inject(HttpClient);

  updateBooking(id: string, booking: BookingModele): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, booking);
  }

  getBookingById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createBooking(bookingModele: BookingModele): Observable<any> {
    return this.http.post(`${this.apiUrl}`, bookingModele);
  }
  getBooking(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
