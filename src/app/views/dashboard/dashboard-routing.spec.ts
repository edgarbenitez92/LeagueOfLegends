import { AboutComponent } from './about/about.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { ChampionsListComponent } from './champions-list/champions-list.component';
import { dashboardRoutes } from './dashboard-routing.module';

fdescribe('DashboardRouting', () => {
  it('It should exist all children routes', () => {
    const childrenRoutes = dashboardRoutes[1].children;
    expect(childrenRoutes).toContain({ path: 'home', component: ChampionsListComponent });
    expect(childrenRoutes).toContain({ path: 'about', component: AboutComponent });
    expect(childrenRoutes).toContain({ path: 'champion/:id', component: ChampionDetailComponent });
  });
});
