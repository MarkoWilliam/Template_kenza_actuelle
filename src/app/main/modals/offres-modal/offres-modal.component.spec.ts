import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresModalComponent } from './offres-modal.component';

describe('OffresModalComponent', () => {
  let component: OffresModalComponent;
  let fixture: ComponentFixture<OffresModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffresModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
