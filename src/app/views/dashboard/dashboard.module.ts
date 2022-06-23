import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChampionsListComponent } from './champions-list/champions-list.component';

@NgModule({
  declarations: [DashboardComponent, ChampionsListComponent],
  imports: [SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
