import { TestBed } from '@angular/core/testing';

import { WebseriesserviceService } from './webseriesservice.service';

describe('WebseriesserviceService', () => {
  let service: WebseriesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebseriesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
