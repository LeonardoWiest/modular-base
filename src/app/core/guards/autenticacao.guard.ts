import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';

export abstract class AutenticacaoGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.router.navigate(['/autenticacao'], {
      queryParams: {
        return: state.url
      }
    });
  }
}
