import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitCurvyComponent } from './produit-curvy.component';

describe('ProduitCurvyComponent', () => {
  let component: ProduitCurvyComponent;
  let fixture: ComponentFixture<ProduitCurvyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitCurvyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitCurvyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
