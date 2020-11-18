import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material';
import { ProduitsComponent } from './produits.component';

describe('ProduitsComponent', () => {
  let component: ProduitsComponent;
  let fixture: ComponentFixture<ProduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitsComponent ],
      imports: [MatTableModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
