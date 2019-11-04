import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosTramitesComponent } from './datosTramites.component';

describe('DatosTramitesComponent', () => {
  let component: DatosUbicacion;
  let fixture: ComponentFixture<DatosTramitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosTramitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosTramitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
