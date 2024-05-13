import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableServiceParentComponent } from '../../../../shared/components/table-service-parent/table-service-parent.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-entity-page',
  standalone: true,
  imports: [TableServiceParentComponent, NgIf],
  templateUrl: './entity-page.component.html',
  styleUrl: './entity-page.component.css'
})
export class EntityPageComponent {
  entity: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.entity = params.get('entity') || '';
    });
  }
}
