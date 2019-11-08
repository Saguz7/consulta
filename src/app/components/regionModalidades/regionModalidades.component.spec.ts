import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionModalidades } from './regionModalidades.component';

describe('RegionModalidades', () => {
  let component: RegionModalidades;
  let fixture: ComponentFixture<RegionModalidades>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionModalidades ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionModalidades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
