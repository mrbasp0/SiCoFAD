import { TestBed } from '@angular/core/testing';

import { ConstanciaService } from './constancia.service';

describe('ConstanciaService', () => {
  let service: ConstanciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstanciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
