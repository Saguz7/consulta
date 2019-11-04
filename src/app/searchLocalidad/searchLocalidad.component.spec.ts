import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLocalidadComponent } from './searchLocalidad.component';

describe('SearchLocalidadComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchLocalidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLocalidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLocalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
