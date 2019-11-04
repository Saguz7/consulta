import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaInformativaComponent } from './tarjetainformativa.component';

describe('TarjetaInformativaComponent', () => {
  let component: TarjetaInformativaComponent;
  let fixture: ComponentFixture<TarjetaInformativaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaInformativaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaInformativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
