import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatTableModule, NgFor, NgIf, MatIconModule, MatButtonModule]
})
export class TicketerListComponent<T extends Record<string, any>> implements OnChanges {
  @Input() data: T[] = [];
  @Input() columns: string[] = [];
  @Input() refreshData!: () => void;
  @Input() deleteEntity!: (id: number) => void;
  @Input() editEntity!: (id: number) => void;

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
