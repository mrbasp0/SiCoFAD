import { TestBed } from '@angular/core/testing';

import { Formato2Service } from './formato2.service';

describe('Formato2Service', () => {
  let service: Formato2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Formato2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
