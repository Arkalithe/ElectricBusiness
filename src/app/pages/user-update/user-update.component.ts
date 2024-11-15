import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserModele } from '../../modele/user.modele';
import { UserService } from '../../services/user.service';
import { UserFormComponentComponent } from '../user-form-component/user-form-component.component';

@Component({
  selector: 'app-user-update',
  standalone: true,
  imports: [ReactiveFormsModule, UserFormComponentComponent],
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css',
})
export class UserUpdateComponent implements OnInit {
  @Input() id: string;
  private readonly userService = inject(UserService);
  private readonly router = inject(Router);
  user: UserModele;

  ngOnInit(): void {
    if (this.id) {
      this.userService.getUserById(this.id).subscribe({
        next: (data: UserModele) => {
          this.user = data;
        },
        error: (err) => {
          console.error('Error fetching user:', err);
          this.user = null;
        },
      });
    }
  }

  onUpdate(updatedUser: UserModele): void {
    this.userService.updateUser(this.id, updatedUser).subscribe({
      next: () => {
        console.log('Utilisateur mis à jour:', updatedUser);
        this.router.navigate(['/']);
      },
      error: (err) => console.error(err),
    });
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }
}
