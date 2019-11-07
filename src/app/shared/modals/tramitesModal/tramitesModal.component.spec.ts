import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TramitesModalComponent } from './tramitesModal.component';

describe('TramitesModalComponent', () => {
  let component: TramitesModalComponent;
  let fixture: ComponentFixture<TramitesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TramitesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TramitesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
