import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login-service';

export const authActivateGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if(loginService.isAuthenticated()){
    return true;
  }

  return router.createUrlTree(['/login']);
};
