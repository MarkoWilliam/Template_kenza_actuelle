import { TestBed } from '@angular/core/testing';

import { SignedGuardService } from './signed-guard.service';

describe('SignedGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignedGuardService = TestBed.get(SignedGuardService);
    expect(service).toBeTruthy();
  });
});
