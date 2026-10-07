import { Routes } from '@angular/router';

export const registerLoadingRoutes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./register.routes').then(m => m.registerRoutes),
  }
];
