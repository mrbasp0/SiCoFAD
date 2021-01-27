import { TestBed } from '@angular/core/testing';

import { DelegadoService } from './delegado.service';

describe('DelegadoService', () => {
  let service: DelegadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelegadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
