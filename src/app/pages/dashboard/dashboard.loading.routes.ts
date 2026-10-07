import { Routes } from '@angular/router';

export const dashboardLoadingRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard.routes').then(m => m.dashboardRoutes),
  }
];
