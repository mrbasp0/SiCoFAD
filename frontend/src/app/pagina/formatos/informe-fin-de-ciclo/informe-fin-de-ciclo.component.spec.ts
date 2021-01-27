import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeFinDeCicloComponent } from './informe-fin-de-ciclo.component';

describe('InformeFinDeCicloComponent', () => {
  let component: InformeFinDeCicloComponent;
  let fixture: ComponentFixture<InformeFinDeCicloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeFinDeCicloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeFinDeCicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
