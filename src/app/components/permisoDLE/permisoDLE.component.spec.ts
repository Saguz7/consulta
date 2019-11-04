import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoDLE } from './permisoDLE.component';

describe('PermisoDLE', () => {
  let component: PermisoDLE;
  let fixture: ComponentFixture<PermisoDLE>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermisoDLE ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermisoDLE);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
