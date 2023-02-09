import { TestBed } from '@angular/core/testing';

import { NormalGuardGuard } from './normal-guard.guard';

describe('NormalGuardGuard', () => {
  let guard: NormalGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NormalGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
