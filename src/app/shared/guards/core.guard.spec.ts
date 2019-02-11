import { TestBed, async, inject } from '@angular/core/testing';

import { CoreGuard } from './core.guard';

describe('CoreGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreGuard]
    });
  });

  it('should ...', inject([CoreGuard], (guard: CoreGuard) => {
    expect(guard).toBeTruthy();
  }));
});
