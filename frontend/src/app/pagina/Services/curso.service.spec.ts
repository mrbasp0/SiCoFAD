/*import { TestBed } from '@angular/core/testing';

import { CursoService } from './curso.service';

describe('CursoService', () => {
  let service: CursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});*/

  
import { TestBed, inject } from '@angular/core/testing';

import { CursoService } from './curso.service';

describe('EmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CursoService]
    });
  });

  it('should be created', inject([CursoService], (service: CursoService) => {
    expect(service).toBeTruthy();
  }));
});
