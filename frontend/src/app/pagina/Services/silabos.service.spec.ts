import { TestBed } from '@angular/core/testing';

import { SilabosService } from './silabos.service';

describe('SilabosService', () => {
  let service: SilabosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SilabosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
