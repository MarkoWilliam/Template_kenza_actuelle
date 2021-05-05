import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreButtonComponent } from './titre-button.component';

describe('TitreButtonComponent', () => {
  let component: TitreButtonComponent;
  let fixture: ComponentFixture<TitreButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitreButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
