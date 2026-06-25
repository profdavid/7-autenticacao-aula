import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { LoginService } from '../services/login-service';

export const authChildaGuard: CanActivateChildFn = (childRoute, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if(loginService.isAuthenticated() && loginService.isAuthenticatedFilhoA()){
    return true;
  }

  return router.createUrlTree(['/login']);
};
