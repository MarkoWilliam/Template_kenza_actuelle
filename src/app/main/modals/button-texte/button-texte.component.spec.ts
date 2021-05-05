import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTexteComponent } from './button-texte.component';

describe('ButtonTexteComponent', () => {
  let component: ButtonTexteComponent;
  let fixture: ComponentFixture<ButtonTexteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonTexteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTexteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
