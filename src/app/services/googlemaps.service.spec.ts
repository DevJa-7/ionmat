import { TestBed } from '@angular/core/testing';

import { GooglemapsService } from './googlemaps.service';

describe('GooglemapsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GooglemapsService = TestBed.get(GooglemapsService);
    expect(service).toBeTruthy();
  });
});
