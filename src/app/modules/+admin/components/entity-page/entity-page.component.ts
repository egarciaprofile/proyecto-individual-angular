import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TableServiceParentComponent } from '../../../../shared/components/table-service-parent/table-service-parent.component';
import { NgIf } from '@angular/common';
import { ConcertFormComponent } from "../concert-form/concert-form.component";

@Component({
    selector: 'app-entity-page',
    standalone: true,
    templateUrl: './entity-page.component.html',
    styleUrl: './entity-page.component.css',
    imports: [TableServiceParentComponent, NgIf, ConcertFormComponent]
})
export class EntityPageComponent implements OnInit, OnDestroy {
  entity: string = '';
  private subscription: Subscription = new Subscription();
  private refresh: boolean = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.addSubscriptionRoute();
  }

  addSubscriptionRoute(): void {
    this.subscription.add(
      this.route.paramMap.subscribe(params => {
        const newEntity = params.get('entity') || '';
        if (this.entity !== newEntity) {
          this.entity = newEntity;
          if (this.refresh) {
            window.location.reload()
          }
          this.refresh = true;
        }
      })
    );
  }

  refreshPage(): void {
    window.location.reload();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
