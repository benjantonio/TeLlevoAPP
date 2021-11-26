import { TestBed } from '@angular/core/testing';

import { APIBdService } from './apibd.service';

describe('APIViajesService', () => {
  let service: APIBdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIBdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
