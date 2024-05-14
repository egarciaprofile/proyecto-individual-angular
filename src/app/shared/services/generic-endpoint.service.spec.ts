import { TestBed } from '@angular/core/testing';

import { GenericEndpointService } from './generic-endpoint.service';

describe('GenericEndpointService', () => {
  let service: GenericEndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericEndpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
