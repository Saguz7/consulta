import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipioModalidades } from './municipioModalidades.component';

describe('MunicipioModalidades', () => {
  let component: MunicipioModalidades;
  let fixture: ComponentFixture<MunicipioModalidades>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipioModalidades ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipioModalidades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
