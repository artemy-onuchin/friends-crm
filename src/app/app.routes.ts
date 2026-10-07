import { Routes } from '@angular/router';
import { NotfoundPageComponent } from './pages/notfound/notfound';
import { peopleLoadingRoutes } from './pages/people/people.loading.routes';
import { dashboardLoadingRoutes } from './pages/dashboard/dashboard.loading.routes';
import { debtsLoadingRoutes } from './pages/debts/debts.loading.routes';
import { datesLoadingRoutes } from './pages/dates/dates.loading.routes';
import { settingsLoadingRoutes } from './pages/settings/settings.loading.routes';
import { relationshipsLoadingRoutes } from './pages/relationships/relationships.loading.routes';
import { registerLoadingRoutes } from './pages/register/register.loading.routes';
import { loginLoadingRoutes } from './pages/login/login.loading.routes';
import { interactionsLoadingRoutes } from './pages/interactions/interactions.loading.routes';
import { GuestLayout } from './layout/guest-layout/guest-layout';
import { WorkspaceLayout } from './layout/workspace-layout/workspace-layout';
import { homeLoadingRoutes } from './pages/home/home.loading.routes';

export const routes: Routes = [
  {
    path: '',
    component: GuestLayout,
    children: [
      ...homeLoadingRoutes,
      ...registerLoadingRoutes,
      ...loginLoadingRoutes,
    ]
  },
  {
    path: '',
    component: WorkspaceLayout,
    children: [
      ...peopleLoadingRoutes,
      ...dashboardLoadingRoutes,
      ...datesLoadingRoutes,
      ...debtsLoadingRoutes,
      ...settingsLoadingRoutes,
      ...relationshipsLoadingRoutes,
      ...interactionsLoadingRoutes,
    ]
  },
  {
    path: '**',
    component: NotfoundPageComponent
  }
];
