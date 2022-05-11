import { TestBed } from '@angular/core/testing';

import { HolidaypackageService } from './holidaypackage.service';

describe('HolidaypackageService', () => {
  let service: HolidaypackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidaypackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
