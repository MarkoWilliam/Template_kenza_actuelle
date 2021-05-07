import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteMetisseModalComponent } from './carte-metisse-modal.component';

describe('CarteMetisseModalComponent', () => {
  let component: CarteMetisseModalComponent;
  let fixture: ComponentFixture<CarteMetisseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteMetisseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteMetisseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
