import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegadosComponent } from './delegados.component';

describe('DelegadosComponent', () => {
  let component: DelegadosComponent;
  let fixture: ComponentFixture<DelegadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelegadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
