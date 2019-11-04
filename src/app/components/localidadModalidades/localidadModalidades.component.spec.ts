import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadModalidadesComponent } from './localidadModalidades.component';

describe('LocalidadModalidades', () => {
  let component: LocalidadModalidades;
  let fixture: ComponentFixture<LocalidadModalidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalidadModalidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalidadModalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
