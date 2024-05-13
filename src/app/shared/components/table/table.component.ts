import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatTableModule, NgFor, NgIf]
})
export class TicketerListComponent<T extends Record<string, any>> implements OnChanges {
  @Input() data: T[] = [];
  displayedColumns: string[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data.length > 0) {
      this.extractColumnNames();
    }
  }

  isObject(item: any): boolean {
    return (item && typeof item === 'object' && !Array.isArray(item));
  }

  objectKeys(item: any): string[] {
    return Object.keys(item);
  }

  private extractColumnNames(): void {
    this.displayedColumns = Object.keys(this.data[0]);
  }
}
