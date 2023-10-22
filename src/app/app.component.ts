import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AppSettingsService } from './core/services/app-settings/app-settings.service';
import { SummonerVersionService } from './core/services/summoner-version/summoner-version.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
