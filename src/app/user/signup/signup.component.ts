import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  submitted: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  phoneNumber: string = '';

  private readonly formBuilder = inject(FormBuilder);
  // private readonly authService = inject(AuthService);

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern]],
      phoneNumber: [''],
    });
  }
  get form() {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    const {} = this.registerForm.value;

    this.successMessage = 'Inscription reussie';
  }
}
