import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../../../shared/interfaces/champions.interface';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SummonerVersionService } from '../summoner-version/summoner-version.service';

@Injectable({
  providedIn: 'root',
})
export class ChampionsService {
  private pathEnglishLanguage: string = 'data/en_US/champion';
  private pathSpanishLanguage: string = 'data/es_ES/champion';

  constructor(private http: HttpClient, private summonerService: SummonerVersionService) { }

  getChampions(): Observable<any> {
    return this.summonerService
      .getLeagueOfLegendsVersions()
      .pipe(
        switchMap((versions: string[]) =>
          this.http.get<any>(
            `${environment.apiBaseUrl}/${versions[0]}/${this.pathEnglishLanguage}.json`
          )
        )
      );
  }

  getChampionById(id: string, language?: string): Observable<Data> {
    return this.summonerService
      .getLeagueOfLegendsVersions()
      .pipe(
        switchMap((versions: string[]) =>
          this.http.get<Data>(
            `${environment.apiBaseUrl}/${versions[0]}/data/en_US/champion/${id}.json`
          )
        )
      );
  }
}
