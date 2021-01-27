import { TestBed } from '@angular/core/testing';

import { Formato5Service } from './formato5.service';

describe('Formato5Service', () => {
  let service: Formato5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Formato5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
