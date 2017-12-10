import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasTComponent } from './tareas-t.component';

describe('TareasTComponent', () => {
  let component: TareasTComponent;
  let fixture: ComponentFixture<TareasTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
