import { Component, Inject, Input, OnInit } from '@angular/core';
import { TicketerListComponent } from '../table/table.component';
import { MatTableModule } from '@angular/material/table';
import { GenericEndpointService } from '../../services/generic-endpoint.service';

@Component({
  selector: 'app-table-service-parent',
  standalone: true,
  imports: [TicketerListComponent, MatTableModule],
  templateUrl: './table-service-parent.component.html',
  styleUrl: './table-service-parent.component.css'
})
export class TableServiceParentComponent<T extends Record<string, any>> implements OnInit {
  @Input() baseUrl!: string;
  entities: T[] = [];
  displayedColumns: string[] = [];

  constructor(private genericService: GenericEndpointService<T>) { }

  ngOnInit(): void {
    if (this.baseUrl) {
      this.genericService.setBaseUrl(this.baseUrl);
      this.loadEntities();
    }
  }

  loadEntities(): void {
    this.genericService.getAll().subscribe({
      next: (data) => {
        this.entities = data;
        if (data.length > 0) {
          this.displayedColumns = Object.keys(data[0]);
          this.displayedColumns.push('actions');
        }
        console.log("Received data:", data);
        console.log("Columns:", this.displayedColumns);
      },
      error: (err) => console.error(`Failed to load data from ${this.genericService}`, err)
    });
  }
}
