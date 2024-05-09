import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../../../../shared/services/user.service';
import { User } from '../../../../shared/models/user/user.model';
import { NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { ErrorDisplayComponent } from '../../../../shared/components/error/error.component';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
    MatCardModule,
    ErrorDisplayComponent
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  constructor(private userService: UserService, private snackBar: MatSnackBar, private fb: FormBuilder) { }

  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    surname: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]]
  });

  onSubmit() {
    if (this.registerForm.valid) {
      const formData: User = {
        name: this.registerForm.value.name || "",
        surname: this.registerForm.value.surname || "",
        email: this.registerForm.value.email || "",
        password: this.registerForm.value.password || "",
        phone: this.registerForm.value.phone || ""
      };

      this.userService.addUser(formData).subscribe({
        next: (user) => {
          this.snackBar.open('User successfully registered!', 'Close', { duration: 3000 });
        },
        error: (error: HttpErrorResponse) => {
          console.error('Registration failed:', error);
          switch (error.status) {
            case 409:
              this.snackBar.open(`This mail is already registered!`, 'Close', { duration: 3000 });
              break;
            case 500:
              this.snackBar.open('A server error occurred. Please try again.', 'Close', { duration: 3000 });
              break;
            default:
              this.snackBar.open(`Error: ${error.message}`, 'Close', { duration: 3000 });
              break;
          }
        }
      });
    }
  }
}
