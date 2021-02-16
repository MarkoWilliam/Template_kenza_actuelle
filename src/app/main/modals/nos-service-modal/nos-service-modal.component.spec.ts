import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosServiceModalComponent } from './nos-service-modal.component';

describe('NosServiceModalComponent', () => {
  let component: NosServiceModalComponent;
  let fixture: ComponentFixture<NosServiceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosServiceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosServiceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
