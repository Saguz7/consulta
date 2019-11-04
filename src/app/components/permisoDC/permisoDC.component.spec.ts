import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoDC } from './permisoDC.component';

describe('PermisoDC', () => {
  let component: PermisoDC;
  let fixture: ComponentFixture<PermisoDC>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermisoDC ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermisoDC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
