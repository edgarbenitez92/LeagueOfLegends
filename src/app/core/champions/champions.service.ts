import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Data, Skin, Champion } from '../../shared//interfaces/champions';
import { switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ChampionsService {
    // Url de descripción, idiomas
    private lanEnglish: string = 'data/en_US/champion';
    private lanSpanish: string = 'data/es_ES/champion';

    // Url de descripción, sin idioma
    private baseUrl: string = 'https://ddragon.leagueoflegends.com/cdn';
    // Url Skin de Campeón
    private skinUrl: string =
        'https://ddragon.leagueoflegends.com/cdn/img/champion/loading';

    champion!: Champion;
    skin!: Skin;

    constructor(private http: HttpClient) { }

    getVersions(): Observable<string[]> {
        return this.http.get<string[]>(
            'https://ddragon.leagueoflegends.com/api/versions.json'
        );
    }

    getChampions(): Observable<any> {
        return this.getVersions().pipe(
            switchMap((versions: string[]) =>
                this.http.get<any>(
                    `${this.baseUrl}/${versions[0]}/${this.lanEnglish}.json`
                )
            )
        );
    }

    getChampionId(id: string, language: string): Observable<any> {
        return this.getVersions().pipe(
            switchMap((versions: string[]) =>
                this.http.get<any>(
                    `${this.baseUrl}/${versions[0]}/data/${language}/champion/${id}.json`
                )
            )
        );
    }

    getAllChamps4Search(): Observable<Data> {
        return this.getVersions().pipe(
            switchMap((versions) =>
                this.http.get<Data>(
                    `${this.baseUrl}/${versions[0]}/${this.lanEnglish}.json`
                )
            )
        );
    }
}
