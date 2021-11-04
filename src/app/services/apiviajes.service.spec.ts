import { TestBed } from '@angular/core/testing';

import { APIViajesService } from './apiviajes.service';

describe('APIViajesService', () => {
  let service: APIViajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIViajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
