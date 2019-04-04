import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHolaComponent } from './button-hola.component';

describe('ButtonHolaComponent', () => {
  let component: ButtonHolaComponent;
  let fixture: ComponentFixture<ButtonHolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonHolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonHolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
