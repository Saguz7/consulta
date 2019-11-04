import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpciontwoComponent } from './opciontwo.component';

describe('OpciontwoComponent', () => {
  let component: OpciontwoComponent;
  let fixture: ComponentFixture<OpciontwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpciontwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpciontwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
