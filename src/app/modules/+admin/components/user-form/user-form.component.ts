import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../../../shared/services/impl/user/user.service';
import { TicketerUser } from '../../../../shared/models/user/user.model';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
  form!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(): void {
    this.form = this.fb.group({
      name: [this.data && this.data.id ? this.data.name : '', Validators.required],
      surname: [this.data && this.data.id ? this.data.surname : '', Validators.required],
      email: [this.data && this.data.id ? this.data.email : '', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: [this.data && this.data.id ? this.data.phone : '', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData: TicketerUser = {
        name: this.form.value.name || "",
        surname: this.form.value.surname || "",
        email: this.form.value.email || "",
        password: this.form.value.password || "",
        phone: this.form.value.phone || ""
      };

      if (!this.data.id) {
        this.userService.add(formData).subscribe();
      } else {

      }
    }
  }
}
