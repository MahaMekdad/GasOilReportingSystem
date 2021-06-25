import { TestBed } from '@angular/core/testing';

import { WellCoordinateService } from './well-coordinate.service';

describe('WellCoordinateService', () => {
  let service: WellCoordinateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WellCoordinateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
