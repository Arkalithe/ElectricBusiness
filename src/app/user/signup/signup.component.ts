import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: [''],
    })
  }
  get form() {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    const {firstname, lastname, email, password, phoneNumber} = this.registerForm.value;

    this.successMessage = 'Inscription reussie';

    this.authService.registerUser({firstname, lastname, email, password, phoneNumber})
      .subscribe(success => {if (success){
        this.successMessage = 'Inscription reussie';
      } else {
        this.errorMessage = 'Inscription Raté. Essayer plus tard.';
      }

      }, error => {
        this.errorMessage = "Un probleme est surevenue essayer plus tard";
        }
      )
  }
}
