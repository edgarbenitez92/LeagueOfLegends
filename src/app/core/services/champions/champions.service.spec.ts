import { ChampionsService } from './champions.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SummonerVersionService } from '../summoner-version/summoner-version.service';
import { AppSettingsService } from '../app-settings/app-settings.service';
import { TestBed } from '@angular/core/testing';

fdescribe('ChampionsService', () => {
  let service: ChampionsService;
  let summoner: SummonerVersionService;
  let httpClient: HttpClient;
  let translate: AppSettingsService;

  beforeEach(async () => {
    service = new ChampionsService(httpClient, summoner, translate);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
  });

  it('It should be created', () => {
    expect(service).toBeTruthy();
  });

  it('It should call the get champion request', () => {
    const spy = spyOn(service, 'getChampions');
    service.getChampions();
    expect(spy).toHaveBeenCalled();
  });

  it('It should call the get champion by id request', () => {
    const spy = spyOn(service, 'getChampionById');
    service.getChampionById('Aatrox');
    expect(spy).toHaveBeenCalled();
  });
});
