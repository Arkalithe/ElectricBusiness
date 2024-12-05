import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { UserModele } from '../../modele/user.modele';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'div[app-user-form-component]',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './user-form-component.component.html',
  styleUrl: './user-form-component.component.css',
})
export class UserFormComponentComponent implements OnInit, OnChanges {
  @Input() user: UserModele;
  @Input() isUpdateMode: boolean = false;
  @Output() submitForm = new EventEmitter<UserModele>();
  @Output() cancel = new EventEmitter<void>();
  public userForm: FormGroup;

  private initializeForm(): void {
    this.userForm = new FormGroup(
      {
        firstname: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        lastname: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[£\\(\\)_#§@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$',
          ),
        ]),
        confirmPassword: new FormControl(''),
        phone: new FormControl(''),
        birthedAt: new FormControl('', Validators.required),
      },
      { validators: this.passwordMatchValidator },
    );
  }
  private passwordMatchValidator(
    formGroup: FormGroup,
  ): { [key: string]: boolean } | null {
    const password = formGroup.get('password').value;
    const confirmPassword = formGroup.get('confirmPassword').value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  }
  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'] && changes['user'].currentValue) {
      const user = changes['user'].currentValue;

      if (this.userForm) {
        this.patchFormValues(user);
      } else {
        console.warn('Form is not initialized yet.');
      }
    }

    if (this.isUpdateMode && this.userForm) {
      this.userForm.get('password')?.clearValidators();
      this.userForm.get('confirmPassword')?.clearValidators();
      this.userForm.get('password')?.updateValueAndValidity();
      this.userForm.get('confirmPassword')?.updateValueAndValidity();
    }
  }

  private patchFormValues(user: UserModele): void {
    this.userForm.patchValue({
      firstname: user.firstname || '',
      lastname: user.lastname || '',
      email: user.email || '',
      phone: user.phone || '',
      birthedAt: user.birthedAt || '',
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const userData: UserModele = { ...this.user, ...this.userForm.value };
      this.submitForm.emit(userData);
    } else {
      console.error('Formulaire invalide :', this.userForm.errors);
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
