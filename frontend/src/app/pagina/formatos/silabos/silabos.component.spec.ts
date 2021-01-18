import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilabosComponent } from './silabos.component';

describe('SilabosComponent', () => {
  let component: SilabosComponent;
  let fixture: ComponentFixture<SilabosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilabosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SilabosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
