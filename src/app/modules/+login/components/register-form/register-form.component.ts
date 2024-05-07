import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../../../../shared/services/user.service';
import { User } from '../../../../shared/models/user/user.model';
import { NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, NgIf,],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  constructor(private userService: UserService, private snackBar: MatSnackBar) { }

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    surname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')])
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const formData: User = {
        name: this.loginForm.value.name || "",
        surname: this.loginForm.value.surname || "",
        email: this.loginForm.value.email || "",
        password: this.loginForm.value.password || "",
        phone: this.loginForm.value.phone || ""
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
