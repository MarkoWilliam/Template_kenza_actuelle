import { TestBed } from '@angular/core/testing';

import { GlobaleService } from './globale.service';

describe('GlobaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobaleService = TestBed.get(GlobaleService);
    expect(service).toBeTruthy();
  });
});
