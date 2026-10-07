import { Routes } from '@angular/router';
import { HomePageComponent } from './home';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  }
];
