import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MiniIconsChampionsComponent } from './mini-icons-champions/mini-icons-champions.component';


@NgModule({
  declarations: [DashboardComponent, MiniIconsChampionsComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
