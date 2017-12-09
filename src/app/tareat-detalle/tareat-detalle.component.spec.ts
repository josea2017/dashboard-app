import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareatDetalleComponent } from './tareat-detalle.component';

describe('TareatDetalleComponent', () => {
  let component: TareatDetalleComponent;
  let fixture: ComponentFixture<TareatDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareatDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareatDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
