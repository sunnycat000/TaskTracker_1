import { TestBed } from '@angular/core/testing';

import { TaksServiceService } from './taks-service.service';

describe('TaksServiceService', () => {
  let service: TaksServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaksServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
