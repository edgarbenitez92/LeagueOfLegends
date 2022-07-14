import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Data, Skin, Champion } from '../../shared//interfaces/champions';
import { switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChampionsService {
  private pathEnglishLanguage: string = 'data/en_US/champion';
  private pathSpanishLanguage: string = 'data/es_ES/champion';
  // Url de descripción, sin idioma
  // private baseUrl: string = 'https://ddragon.leagueoflegends.com/cdn';
  // Url Skin de Campeón
  private skinUrl: string = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading';

  champion!: Champion;
  skin!: Skin;

  constructor(private http: HttpClient) {}

  getLeagueOfLegendsVersions(): Observable<string[]> {
    return this.http.get<string[]>('https://ddragon.leagueoflegends.com/api/versions.json');
  }

  getChampions(): Observable<any> {
    return this.getLeagueOfLegendsVersions().pipe(
      switchMap((versions: string[]) =>
        this.http.get<any>(
          `${environment.apiBaseUrl}/${versions[0]}/${this.pathEnglishLanguage}.json`
        )
      )
    );
  }

  getChampionById(id: string, language?: string): Observable<Data> {
    return this.getLeagueOfLegendsVersions().pipe(
      switchMap((versions: string[]) =>
        this.http.get<Data>(
          `${environment.apiBaseUrl}/${versions[0]}/data/en_US/champion/${id}.json`
        )
      )
    );
  }

  getAllChamps4Search(): Observable<Data> {
    return this.getLeagueOfLegendsVersions().pipe(
      switchMap((versions) =>
        this.http.get<Data>(
          `${environment.apiBaseUrl}/${versions[0]}/${this.pathEnglishLanguage}.json`
        )
      )
    );
  }

  getSplashChampion(championId: string): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}/img/champion/loading/${championId}_0.jpg`);
  }
}
