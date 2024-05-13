import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VenueService } from '../../../../shared/services/impl/venue/venue.service';

@Component({
  selector: 'app-venue-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './venue-form.component.html',
  styleUrl: './venue-form.component.css'
})
export class VenueFormComponent implements OnInit {
  form!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private venueService: VenueService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.data && this.data.id ? this.data.name : '', Validators.required],
      city: [this.data && this.data.id ? this.data.city : '', Validators.required],
      country: [this.data && this.data.id ? this.data.country : '', Validators.required],
      address: [this.data && this.data.id ? this.data.address : '', Validators.required],
      capacity: [this.data && this.data.id ? this.data.capacity : '', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const venueData = this.form.value;
      if (this.data && this.data.id) {

      } else {
        this.venueService.add(venueData).subscribe({
          next: response => console.log('Venue created', response),
          error: error => console.error('Error creating venue', error)
        });
      }
    }
  }
}
