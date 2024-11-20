import { TestBed } from '@angular/core/testing';

import { UserLocalisationService } from './user-localisation.service';

describe('UserLocalisationService', () => {
  let service: UserLocalisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLocalisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
