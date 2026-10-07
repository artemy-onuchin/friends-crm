import { Routes } from '@angular/router';

export const relationshipsLoadingRoutes: Routes = [
  {
    path: 'relationships',
    loadChildren: () => import('./relationships.routes').then(m => m.relationshipsRoutes),
  }
];
