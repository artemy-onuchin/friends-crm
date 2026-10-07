import { Routes } from '@angular/router';

export const datesLoadingRoutes: Routes = [
  {
    path: 'dates',
    loadChildren: () => import('./dates.routes').then(m => m.datesRoutes),
  }
];
