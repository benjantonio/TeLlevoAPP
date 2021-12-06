import { TestBed } from '@angular/core/testing';

import { APICuentasService } from './api-cuentas.service';

describe('ApiCuentasService', () => {
  let service: APICuentasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APICuentasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
