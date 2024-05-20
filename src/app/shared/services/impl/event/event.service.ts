import { Injectable } from '@angular/core';
import { TicketerEvent } from '../../../models/event/event.model';
import { GenericEndpointService } from '../../generic-endpoint.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService extends GenericEndpointService<TicketerEvent> {
  constructor(http: HttpClient) {
    super(http);
    this.setBaseUrl('event');
  }
}
