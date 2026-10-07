import { Routes } from '@angular/router';

export const peopleLoadingRoutes: Routes = [
  {
    path: 'people',
    loadChildren: () => import('./people.routes').then(m => m.peopleRoutes),
  }
];
