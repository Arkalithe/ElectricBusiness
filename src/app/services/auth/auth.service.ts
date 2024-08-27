import {Injectable} from "@angular/core";
import {delay, map, Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn: boolean = false;

  constructor(private userService: UserService) {
  }


  login(email: string, password: string): Observable<boolean> {
    return this.userService.getUsers().pipe(
      map(users => {
        const userExists = users.some(user => user.email === email && user.password === password);
        this.isLoggedIn = userExists;
        return userExists;
      })
    );
  }

  logout() {
    this.isLoggedIn = false;
  }
}



