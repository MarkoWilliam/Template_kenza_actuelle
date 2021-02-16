import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitBebeComponent } from './produit-bebe.component';

describe('ProduitBebeComponent', () => {
  let component: ProduitBebeComponent;
  let fixture: ComponentFixture<ProduitBebeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitBebeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitBebeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
