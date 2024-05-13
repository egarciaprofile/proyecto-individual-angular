import { Injectable } from '@angular/core';
import { GenericEndpointService } from '../../generic-endpoint.service';
import { TicketerUser } from '../../../models/user/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericEndpointService<TicketerUser> {

  constructor(http: HttpClient) {
    super(http);
    this.setBaseUrl('user');
  }
}
