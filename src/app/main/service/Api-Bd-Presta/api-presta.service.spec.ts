import { TestBed } from '@angular/core/testing';

import { ApiPrestaService } from './api-presta.service';

describe('ApiPrestaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiPrestaService = TestBed.get(ApiPrestaService);
    expect(service).toBeTruthy();
  });
});
