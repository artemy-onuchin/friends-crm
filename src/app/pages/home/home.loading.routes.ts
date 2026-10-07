import { Routes } from '@angular/router';

export const homeLoadingRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home.routes').then(m => m.homeRoutes),
  }
];
