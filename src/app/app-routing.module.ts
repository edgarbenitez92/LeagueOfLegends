import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () => import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'error',
    loadChildren: () => import('./views/error/error.module').then((m) => m.ErrorModule),
  },
  {
    path: '**',
    redirectTo: '/error/not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
