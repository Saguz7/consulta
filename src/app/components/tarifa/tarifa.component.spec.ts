import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarifa } from './tarifa.component';

describe('Tarifa', () => {
  let component: Tarifa;
  let fixture: ComponentFixture<Tarifa>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tarifa ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tarifa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
