import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'api/users';

  constructor(private http: HttpClient) {}

  getItems(): Observable<string[]> {
    return this.http
      .get<any[]>(this.apiUrl)
      .pipe(map((users) => users.map((user) => user.name)));
  }
}
