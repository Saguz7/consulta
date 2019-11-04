import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusConcesion } from './estatusConcesion.component';

describe('EstatusConcesion', () => {
  let component: EstatusConcesion;
  let fixture: ComponentFixture<EstatusConcesion>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatusConcesion ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatusConcesion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
