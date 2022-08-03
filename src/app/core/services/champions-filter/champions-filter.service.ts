import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SummonerVersionService } from '../summoner-version/summoner-version.service';
import { Observable } from 'rxjs';
import { Data } from 'src/app/shared/interfaces/champions.interface';
import { environment } from 'src/environments/environment';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChampionsFilterService {
  private pathEnglishLanguage: string = 'data/en_US/champion';

  constructor(private http: HttpClient, private summonerService: SummonerVersionService) { }

  getAllChamps4Search(): Observable<Data> {
    return this.summonerService
      .getLeagueOfLegendsVersions()
      .pipe(
        switchMap((versions) =>
          this.http.get<Data>(
            `${environment.apiBaseUrl}/${versions[0]}/${this.pathEnglishLanguage}.json`
          )
        )
      );
  }
}
