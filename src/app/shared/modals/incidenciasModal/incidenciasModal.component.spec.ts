import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciasModalComponent } from './incidenciasModal.component';

describe('IncidenciasModalComponent', () => {
  let component: IncidenciasModalComponent;
  let fixture: ComponentFixture<IncidenciasModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenciasModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
