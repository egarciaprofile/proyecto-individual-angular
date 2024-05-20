import { Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { TicketerEvent } from '../../../../shared/models/event/event.model';
import { TicketerPerformer } from '../../../../shared/models/performer/performer.model';
import { CommonModule, NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { PerformerService } from '../../../../shared/services/impl/performer/performer.service';
import { EventService } from '../../../../shared/services/impl/event/event.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConcertService } from '../../../../shared/services/impl/concert/concert.service';

@Component({
  selector: 'app-concert-form',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, MatInputModule, MatButtonModule, MatOptionModule, MatInputModule, MatSelectModule, CommonModule],
  templateUrl: './concert-form.component.html',
  styleUrl: './concert-form.component.css'
})
export class ConcertFormComponent {
  form!: FormGroup;
  events$!: Observable<TicketerEvent[]>;
  performers$!: Observable<TicketerPerformer[]>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private concertService: ConcertService,
    private eventService: EventService,
    private performerService: PerformerService
  ) {}

  ngOnInit(): void {
    this.formInit();

    this.events$ = this.eventService.getAll();
    this.performers$ = this.performerService.getAll();
  }

  formInit(): void {
    this.form = this.fb.group({
      event: [this.data && this.data.event ? this.data.event.id : ''],
      performer: [this.data && this.data.performer ? this.data.performer.id : '']
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = {
        id: this.data ? this.data.id : null,
        event: this.form.value.event,
        performer: this.form.value.performer
      };

      if (!this.data.id) {
        this.concertService.add(formData).subscribe({
          next: (response) => {
          },
          error: (error) => {
          }
        });
      }
    }
  }
}
