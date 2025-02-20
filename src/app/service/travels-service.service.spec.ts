import { TestBed } from '@angular/core/testing';

import { TravelsServiceService } from './travels-service.service';

describe('TravelsServiceService', () => {
  let service: TravelsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
