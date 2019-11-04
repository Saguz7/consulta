import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosGenerales } from './datosGenerales.component';

describe('DatosGenerales', () => {
  let component: DatosGenerales;
  let fixture: ComponentFixture<DatosGenerales>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosGenerales ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosGenerales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
