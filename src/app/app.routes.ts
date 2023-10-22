import { Routes } from '@angular/router';

export const base_routes: Routes = [
  { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./views/dashboard/dashboard.routes').then((m) => m.dashboard_routes),
  },
  {
    path: 'error',
    loadChildren: () => import('./views/error/error.routes').then((m) => m.error_routes),
  },
  {
    path: '**',
    redirectTo: '/error/not-found',
    pathMatch: 'full',
  },
];
