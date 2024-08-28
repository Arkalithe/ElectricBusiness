import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: `./login.component.css`,
  standalone: true,
  imports: [FormsModule],
})
export class LoginComponent {
  message: string = "Vous êtes deconnecté.";
  email: string = "";
  password: string = "";


  constructor(
    protected authService: AuthService,
    private router: Router,
  ) {
  }


  setMessage() {
    if (this.authService.isLoggedIn) {
      this.message = "Vous êtes connecter.";
    } else {
      this.message = "Identifiant ou mot de passe incorrecte.";
    }
  }

  login() {
    this.message = "Tentative de connexion en cours";
    this.authService
      .login(this.email, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if (isLoggedIn) {
          this.router.navigate(["/home"]);
        } else {
          this.password = "";
          this.router.navigate(["/login"]);
        }
      });
  }

  logout() {
    this.authService.logout();
    this.message = "Vous êtes deconnecté.";
  }
}
