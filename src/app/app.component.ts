import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AppSettingsService } from './core/services/app-settings/app-settings.service';
import { SummonerVersionService } from './core/services/summoner-version/summoner-version.service';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        RouterOutlet,
        NgxSpinnerModule,
        SpinnerComponent,
    ],
})
export class AppComponent implements OnInit {
  constructor(
    private appSettingsService: AppSettingsService,
    private swUpdate: SwUpdate,
    private summonerVersionService: SummonerVersionService
  ) {}

  ngOnInit(): void {
    this.initSettingsService();
    this.getLastApiVersion();
  }

  initSettingsService() {
    this.appSettingsService.init();
    this.updatePWA();
  }

  updatePWA() {
    if (!this.swUpdate.isEnabled) return;

    this.swUpdate.checkForUpdate().then((isUpdated) => {
      if (isUpdated) {
        this.swUpdate.activateUpdate().then(() => {
          location.reload();
        });
      }
    });
  }

  getLastApiVersion() {
    this.summonerVersionService.getLeagueOfLegendsVersions().subscribe();
  }
}
