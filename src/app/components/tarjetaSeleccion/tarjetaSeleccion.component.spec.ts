import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaSeleccionComponent } from './tarjetaSeleccion.component';

describe('TarjetaSeleccionComponent', () => {
  let component: TarjetaSeleccionComponent;
  let fixture: ComponentFixture<TarjetaSeleccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaSeleccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
