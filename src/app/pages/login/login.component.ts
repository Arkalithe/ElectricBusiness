import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: `./login.component.css`,
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  @HostBinding('class.grid-auto-row') grid = true;
  @HostBinding('class.even-columns') gridEven = true;
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);
  errorMessage = '';
  form: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
          ),
        ],
      ],
      password: ['', [Validators.required]],
      keepConnected: [false],
    });
  }

  login(): void {
    if (this.form.valid) {
      const { email, password, keepConnected } = this.form.value;
      this.authService.login(email, password, keepConnected).subscribe({
        next: () => this.router.navigate(['/']),
        error: () => {
          this.errorMessage = 'Invalid credentials';
        },
      });
    } else {
      this.errorMessage = 'Credentials Incorrect';
    }
  }
}
