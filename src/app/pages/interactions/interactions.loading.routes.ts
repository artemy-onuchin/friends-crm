import { Routes } from '@angular/router';

export const interactionsLoadingRoutes: Routes = [
  {
    path: 'interactions',
    loadChildren: () => import('./interactions.routes').then(m => m.interactionsRoutes),
  }
];
