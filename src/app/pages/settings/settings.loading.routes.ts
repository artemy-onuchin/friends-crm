import { Routes } from '@angular/router';

export const settingsLoadingRoutes: Routes = [
  {
    path: 'settings',
    loadChildren: () => import('./settings.routes').then(m => m.settingsRoutes),
  }
];
