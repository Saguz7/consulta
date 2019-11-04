import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedientesDC } from './expedientesDC.component';

describe('ExpedientesDC', () => {
  let component: ExpedientesDC;
  let fixture: ComponentFixture<ExpedientesDC>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpedientesDC ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpedientesDC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
