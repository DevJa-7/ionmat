import { TestBed } from '@angular/core/testing';

import { DatePickerService } from './datepicker.service';

describe('DatePickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatePickerService = TestBed.get(DatePickerService);
    expect(service).toBeTruthy();
  });
});
