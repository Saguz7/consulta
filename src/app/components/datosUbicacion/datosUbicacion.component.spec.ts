import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosUbicacion } from './datosGenerales.component';

describe('DatosUbicacion', () => {
  let component: DatosUbicacion;
  let fixture: ComponentFixture<DatosUbicacion>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosUbicacion ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosUbicacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
