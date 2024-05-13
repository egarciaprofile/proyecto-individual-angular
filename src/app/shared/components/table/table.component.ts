import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatTableModule, NgFor, NgIf, MatIconModule]
})
export class TicketerListComponent<T extends Record<string, any>> implements OnChanges {
  @Input() data: T[] = [];
  @Input() columns: string[] = [];
  @Input() refreshData!: () => void;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {

  }

  isObject(item: any): boolean {
    return (item && typeof item === 'object' && !Array.isArray(item));
  }

  objectKeys(item: any): string[] {
    return Object.keys(item);
  }
}
