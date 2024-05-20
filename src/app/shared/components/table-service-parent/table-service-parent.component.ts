import { Component, Inject, Input, OnInit, Type } from '@angular/core';
import { TicketerListComponent } from '../table/table.component';
import { MatTableModule } from '@angular/material/table';
import { GenericEndpointService } from '../../services/generic-endpoint.service';
import { ConcertFormComponent } from '../../../modules/+admin/components/concert-form/concert-form.component';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../../../modules/+admin/components/user-form/user-form.component';
import { VenueFormComponent } from '../../../modules/+admin/components/venue-form/venue-form.component';

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

  constructor(private genericService: GenericEndpointService<T>, public dialog: MatDialog) { }

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
      }
    });
  }

  deleteEntity(id: number): void {
    this.genericService.delete(id).subscribe({
      next: () => {
        this.loadEntities()
      }
    });
  }

  editAddEntity(id: number): void {
    const entityConfig: { [key: string]: { component: Type<any>; } } = {
      'concert': {
        component: ConcertFormComponent
      },
      'user': {
        component: UserFormComponent
      },
      'venue': {
        component: VenueFormComponent
      }
    };

    const config = entityConfig[this.baseUrl];
    if (config) {
      this.openDialog(id, config.component);
    }
  }

  private openDialog(id: number, component: any): void {
    const entityData = id ? this.entities.find(e => e['id'] === id) : {};

    const dialogRef = this.dialog.open(component, {
      data: entityData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadEntities();
    });
  }
}
