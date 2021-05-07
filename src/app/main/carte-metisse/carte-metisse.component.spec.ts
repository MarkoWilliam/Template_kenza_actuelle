import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteMetisseComponent } from './carte-metisse.component';

describe('CarteMetisseComponent', () => {
  let component: CarteMetisseComponent;
  let fixture: ComponentFixture<CarteMetisseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteMetisseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteMetisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
