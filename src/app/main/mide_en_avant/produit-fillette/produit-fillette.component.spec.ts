import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitFilletteComponent } from './produit-fillette.component';

describe('ProduitFilletteComponent', () => {
  let component: ProduitFilletteComponent;
  let fixture: ComponentFixture<ProduitFilletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitFilletteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitFilletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
