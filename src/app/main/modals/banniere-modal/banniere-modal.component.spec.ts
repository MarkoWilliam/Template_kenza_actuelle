import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanniereModalComponent } from './banniere-modal.component';

describe('BanniereModalComponent', () => {
  let component: BanniereModalComponent;
  let fixture: ComponentFixture<BanniereModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanniereModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanniereModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
