import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SummonerVersionService } from './summoner-version.service';

fdescribe('SummonerVersionService', () => {
  let service: SummonerVersionService;
  let httpClient: HttpClient;

  beforeEach(async () => {
    service = new SummonerVersionService(httpClient);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
  });

  it('It should be created', () => {
    expect(service).toBeTruthy();
  });

  it('It should call the versions request', () => {
    const spy = spyOn(service, 'getLeagueOfLegendsVersions');
    service.getLeagueOfLegendsVersions();
    expect(spy).toHaveBeenCalled();
  });
});
