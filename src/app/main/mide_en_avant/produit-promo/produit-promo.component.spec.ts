import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitPromoComponent } from './produit-promo.component';

describe('ProduitPromoComponent', () => {
  let component: ProduitPromoComponent;
  let fixture: ComponentFixture<ProduitPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
