import { Routes } from '@angular/router';

export const loginLoadingRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login.routes').then(m => m.loginRoutes),
  }
];
