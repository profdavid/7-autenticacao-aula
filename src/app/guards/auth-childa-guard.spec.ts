import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { authChildaGuard } from './auth-childa-guard';

describe('authChildaGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authChildaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
