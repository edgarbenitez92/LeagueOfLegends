import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomChampionData, Data } from '../../../shared/interfaces/champions.interface';
import { map, switchMap } from 'rxjs/operators';
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
  ) { }

  getChampions(): Observable<any> {
    return this.summonerService
      .getLeagueOfLegendsVersions()
      .pipe(
        switchMap((versions: string[]) =>
          this.http.get<Data>(`${environment.apiBaseUrl}/${versions[0]}/data/en_US/champion.json`)
        ),
        map(({ data: dataDragon }: Data) => {
          let championsCards: CustomChampionData[] = [];
          let championsArr: any = Object.values(dataDragon);

          for (let champion of championsArr) {
            const { name, info: { difficulty }, id, tags } = champion;
            const image = `${environment.apiBaseUrl}/img/champion/loading/${champion.id}_0.jpg`;
            const miniImage = `${environment.apiBaseUrl}/${champion.version}/img/champion/${champion.id}.png`
            const customChampionCard: CustomChampionData = { name, difficulty, id, tags, image, miniImage };

            championsCards.push(customChampionCard);
          }
          return championsCards;
        })
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
