import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTextApkComponent } from './modal-text-apk.component';

describe('ModalTextApkComponent', () => {
  let component: ModalTextApkComponent;
  let fixture: ComponentFixture<ModalTextApkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTextApkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTextApkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
