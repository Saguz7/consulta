import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevistaT } from './revistaT.component';

describe('RevistaT', () => {
  let component: RevistaT;
  let fixture: ComponentFixture<RevistaT>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevistaT ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevistaT);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
