import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartecardeauModalComponent } from './cartecardeau-modal.component';

describe('CartecardeauModalComponent', () => {
  let component: CartecardeauModalComponent;
  let fixture: ComponentFixture<CartecardeauModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartecardeauModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartecardeauModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
