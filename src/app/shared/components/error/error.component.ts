import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-error-display',
  imports: [
    MatInputModule,
    MatButtonModule,
    NgIf,
    MatCardModule
  ],
  standalone: true,
  template: `
    <ng-container *ngIf="control?.touched">
      <mat-error *ngIf="control?.errors?.[errorCode]">{{ text }}</mat-error>
    </ng-container>
  `
})
export class ErrorDisplayComponent {
  @Input() control: AbstractControl<any, any> | null | undefined;
  @Input() errorCode!: string;
  @Input() text!: string;
}
