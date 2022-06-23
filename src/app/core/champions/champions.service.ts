import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Data, Skin, Champion } from '../../shared//interfaces/champions';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChampionsService {
  private pathEnglishLanguage: string = 'data/en_US/champion';
  private pathSpanishLanguage: string = 'data/es_ES/champion';
  // Url de descripción, sin idioma
  private baseUrl: string = 'https://ddragon.leagueoflegends.com/cdn';
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
        this.http.get<any>(`${this.baseUrl}/${versions[0]}/${this.pathEnglishLanguage}.json`)
      )
    );
  }

  getChampionId(id: string, language: string): Observable<any> {
    return this.getLeagueOfLegendsVersions().pipe(
      switchMap((versions: string[]) =>
        this.http.get<any>(`${this.baseUrl}/${versions[0]}/data/${language}/champion/${id}.json`)
      )
    );
  }

  getAllChamps4Search(): Observable<Data> {
    return this.getLeagueOfLegendsVersions().pipe(
      switchMap((versions) =>
        this.http.get<Data>(`${this.baseUrl}/${versions[0]}/${this.pathEnglishLanguage}.json`)
      )
    );
  }

  getSplashChampion(championId: string): Observable<any> {
    return this.http.get(
      `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championId}_0.jpg`
    );
  }
}
