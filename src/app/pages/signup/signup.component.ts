import { Component, HostBinding, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserModele } from '../../modele/user.modele';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { UserFormComponentComponent } from '../../components/user-form-component/user-form-component.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, UserFormComponentComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  @HostBinding('class.grid-auto-row') grid = true;
  @HostBinding('class.even-columns') gridEven = true;

  onRegister(user: UserModele): void {
    console.log('register' + user);
    this.authService.register(user).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => console.error(err),
    });
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }
}
