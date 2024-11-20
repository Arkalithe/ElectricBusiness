import { TestBed } from '@angular/core/testing';

import { HourlyRateService } from './hourly-rate.service';

describe('HourlyRateService', () => {
  let service: HourlyRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HourlyRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
