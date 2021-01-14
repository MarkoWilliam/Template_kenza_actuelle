import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpAccueilComponent } from './gp-accueil.component';

describe('GpAccueilComponent', () => {
  let component: GpAccueilComponent;
  let fixture: ComponentFixture<GpAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
