import { ChampionsService } from "./champions.service";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SummonerVersionService } from '../summoner-version/summoner-version.service';
import { AppSettingsService } from '../app-settings/app-settings.service';
import { TestBed } from "@angular/core/testing";

fdescribe('ChampionsService', () => {
  let service: ChampionsService;
  let summoner: SummonerVersionService;
  let httpClient: HttpClient;
  let translate: AppSettingsService;

  beforeEach(async () => {
    service = new ChampionsService(httpClient, summoner, translate);
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});