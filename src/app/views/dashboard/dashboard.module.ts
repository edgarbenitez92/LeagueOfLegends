import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChampionsListComponent } from './champions-list/champions-list.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    imports: [SharedModule, DashboardRoutingModule, DashboardComponent,
        ChampionsListComponent,
        ChampionDetailComponent,
        AboutComponent],
})
export class DashboardModule {}
