import { Routes } from '@angular/router';

export const debtsLoadingRoutes: Routes = [
  {
    path: 'debts',
    loadChildren: () => import('./debts.routes').then(m => m.debtsRoutes),
  }
];
