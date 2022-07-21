import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ChampionsListComponent } from './champions-list/champions-list.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
