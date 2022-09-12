import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../../../shared/interfaces/champions.interface';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SummonerVersionService } from '../summoner-version/summoner-version.service';
import { AppSettingsService } from '../app-settings/app-settings.service';

@Injectable({
  providedIn: 'root',
})
export class ChampionsService {
  constructor(
    private http: HttpClient,
    private summonerService: SummonerVersionService,
    private appSettings: AppSettingsService
  ) {}

  getChampions(): Observable<any> {
    return this.summonerService
      .getLeagueOfLegendsVersions()
      .pipe(
        switchMap((versions: string[]) =>
          this.http.get<any>(`${environment.apiBaseUrl}/${versions[0]}/data/en_US/champion.json`)
        )
      );
  }

  getChampionById(id: string): Observable<Data> {
    let language = this.appSettings.appSettings.api_language;

    return this.summonerService
      .getLeagueOfLegendsVersions()
      .pipe(
        switchMap((versions: string[]) =>
          this.http.get<Data>(
            `${environment.apiBaseUrl}/${versions[0]}/data/${language}/champion/${id}.json`
          )
        )
      );
  }
}
