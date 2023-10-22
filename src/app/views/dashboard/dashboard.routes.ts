import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { ChampionsListComponent } from './champions-list/champions-list.component';
import { DashboardComponent } from './dashboard.component';

export const dashboard_routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'home', component: ChampionsListComponent },
      { path: 'about', component: AboutComponent },
      { path: 'champion/:id', component: ChampionDetailComponent },
    ],
  },
];
