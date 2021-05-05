import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTitreComponent } from './button-titre.component';

describe('ButtonTitreComponent', () => {
  let component: ButtonTitreComponent;
  let fixture: ComponentFixture<ButtonTitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonTitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
