import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TexteButtonComponent } from './texte-button.component';

describe('TexteButtonComponent', () => {
  let component: TexteButtonComponent;
  let fixture: ComponentFixture<TexteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TexteButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TexteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
