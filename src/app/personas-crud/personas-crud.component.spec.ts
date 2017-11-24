import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasCrudComponent } from './personas-crud.component';

describe('PersonasCrudComponent', () => {
  let component: PersonasCrudComponent;
  let fixture: ComponentFixture<PersonasCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonasCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
