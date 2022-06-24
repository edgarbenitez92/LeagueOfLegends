import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChampionsListComponent } from './champions-list/champions-list.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';

@NgModule({
  declarations: [DashboardComponent, ChampionsListComponent, ChampionDetailComponent],
  imports: [SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
