import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { ExemploArmazenamento } from './exemplo-armazenamento/exemplo-armazenamento';
import { authChildaGuard } from './guards/auth-childa-guard';
// import { pendingChangesGuard } from './guards/pending-changes-guard';
import { AreaGuard } from './area-guard/area-guard';
import { AreaGuardChild } from './area-guard/area-guard-child';
import { FormEdicao } from './form-edicao/form-edicao';
import { authActivateGuard } from './guards/auth-activate-guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard, canActivate: [authActivateGuard] },
  /**/{
    path: 'guard-demo',
    component: AreaGuard,
    canActivate: [authActivateGuard],
    // canActivateChild: [authChildaGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'filho-b' },
      { path: 'filho-a', component: AreaGuardChild, data: { titulo: 'Rota filha A' }, canActivateChild: [authChildaGuard] },
      { path: 'filho-b', component: AreaGuardChild, data: { titulo: 'Rota filha B' } },
    ],
  },/**/
  /**/{
    path: 'form-edicao',
    component: FormEdicao,
    canActivate: [authActivateGuard],
    // canDeactivate: [pendingChangesGuard],
  },/**/
  { path: 'armazenamento', component: ExemploArmazenamento, canActivate: [authActivateGuard] },
];
