import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitMFComponent } from './produit-mf.component';

describe('ProduitMFComponent', () => {
  let component: ProduitMFComponent;
  let fixture: ComponentFixture<ProduitMFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitMFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitMFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
