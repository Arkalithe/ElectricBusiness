import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {User} from "../modele/user";
import {USERS} from "../mockUp/mock-up";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  getUserByUuid(uuid: string): Observable<User | undefined> {

    const user = USERS.find(u => u.uuid === uuid);
    return of(user);
  }
}
