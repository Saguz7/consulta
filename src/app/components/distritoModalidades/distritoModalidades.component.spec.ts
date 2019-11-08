import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistritoModalidades } from './distritoModalidades.component';

describe('DistritoModalidades', () => {
  let component: DistritoModalidades;
  let fixture: ComponentFixture<DistritoModalidades>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistritoModalidades ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistritoModalidades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
