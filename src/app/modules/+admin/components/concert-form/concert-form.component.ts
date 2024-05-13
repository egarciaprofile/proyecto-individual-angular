import { Component, OnInit} from '@angular/core';
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
    private fb: FormBuilder,
    private eventService: EventService,
    private performerService: PerformerService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      event: [''],
      performer: ['']
    });

    this.events$ = this.eventService.getAll();
    this.performers$ = this.performerService.getAll();
  }
}
