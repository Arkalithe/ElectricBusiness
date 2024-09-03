import {Injectable} from "@angular/core";
import {BehaviorSubject, delay, map, Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user.service";
import {User} from "../../modele/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private roleSubject = new BehaviorSubject<string | null>(null);
  public role = this.roleSubject.asObservable();

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private userService: UserService) {
  }

  login(email: string, password: string): Observable<boolean> {
    return this.userService.getUsers().pipe(
      map(users => {
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
          this.isLoggedInSubject.next(true);
          this.roleSubject.next(user.role);
          this.currentUserSubject.next(user);
        } else {
          this.isLoggedInSubject.next(false);
          this.roleSubject.next(null);
          this.currentUserSubject.next(null);
        }
        return !!user;
      })
    );
  }

  logout() {
    this.isLoggedInSubject.next(false);
    this.roleSubject.next(null);
    this.currentUserSubject.next(null);
  }

  get isLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }

  get currentUser(): User | null {
    return this.currentUserSubject.value;
  }
}



