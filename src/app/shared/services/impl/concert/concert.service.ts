import { Injectable } from '@angular/core';
import { GenericEndpointService } from '../../generic-endpoint.service';
import { HttpClient } from '@angular/common/http';
import { TicketerConcert } from '../../../models/concert/concert.model';

@Injectable({
  providedIn: 'root'
})
export class ConcertService extends GenericEndpointService<TicketerConcert> {
  constructor(http: HttpClient) {
    super(http);
    this.setBaseUrl('concert');
  }
}
