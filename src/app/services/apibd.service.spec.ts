import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { APIBdService } from './apibd.service';

describe('APIViajesService', () => {
  let service: APIBdService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(APIBdService);
  });

  /*
  it('should be created', () => {
    expect(service).toBeTruthy();
  });*/
});
