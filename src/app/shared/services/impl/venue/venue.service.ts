import { Injectable } from '@angular/core';
import { GenericEndpointService } from '../../generic-endpoint.service';
import { HttpClient } from '@angular/common/http';
import { TicketerVenue } from '../../../models/venue/venue.model';

@Injectable({
  providedIn: 'root'
})
export class VenueService extends GenericEndpointService<TicketerVenue> {
  constructor(http: HttpClient) {
    super(http);
    this.setBaseUrl('venue');
  }
}
