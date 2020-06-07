import { TestBed } from '@angular/core/testing';

import { AuthNotLoginGuard } from './auth-not-login.guard';

describe('AuthNotLoginGuard', () => {
  let guard: AuthNotLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthNotLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
