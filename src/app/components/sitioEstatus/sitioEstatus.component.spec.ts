import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitioEstatus } from './sitioEstatus.component';

describe('SitioEstatus', () => {
  let component: SitioEstatus;
  let fixture: ComponentFixture<SitioEstatus>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitioEstatus ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitioEstatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
