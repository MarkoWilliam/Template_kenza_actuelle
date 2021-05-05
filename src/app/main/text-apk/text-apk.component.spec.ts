import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAPKComponent } from './text-apk.component';

describe('TextAPKComponent', () => {
  let component: TextAPKComponent;
  let fixture: ComponentFixture<TextAPKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAPKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAPKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
