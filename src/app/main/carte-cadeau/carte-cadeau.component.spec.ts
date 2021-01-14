import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteCadeauComponent } from './carte-cadeau.component';

describe('CarteCadeauComponent', () => {
  let component: CarteCadeauComponent;
  let fixture: ComponentFixture<CarteCadeauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteCadeauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteCadeauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
