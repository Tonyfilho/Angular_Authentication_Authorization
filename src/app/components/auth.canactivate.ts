import { inject } from '@angular/core';
import {
    CanActivateFn,
    Router
} from '@angular/router';
import { AuthService } from './auth.service';

export const routesUserGuard: CanActivateFn = (route, state) => {
  const authenticationService = inject(AuthService);
  const router = inject(Router);

  if (authenticationService.currentUserSig()) {
    return true;
  }
  router.navigateByUrl('/about');
  return false;
};
