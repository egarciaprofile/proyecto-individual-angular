import { Injectable } from '@angular/core';
import { TicketerPerformer } from '../../../models/performer/performer.model';
import { GenericEndpointService } from '../../generic-endpoint.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerformerService extends GenericEndpointService<TicketerPerformer> {
  constructor(http: HttpClient) {
    super(http);
    this.setBaseUrl('performer');
  }
}
