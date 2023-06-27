import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../../../shared/interfaces/champions.interface';
import { map, pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AppSettingsService } from '../app-settings/app-settings.service';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root',
})
export class ChampionsService {
  apiVersion: string | null;

  constructor(
    private http: HttpClient,
    private appSettings: AppSettingsService,
    private sessionService: SessionService
  ) {
    this.apiVersion = this.sessionService.getApiVersion();
  }

  getChampions(): Observable<any> {
    return this.http
      .get<any>(`${environment.apiBaseUrl}/${this.apiVersion}/data/en_US/champion.json`)
      .pipe(
        pluck('data'),
        map((data) => {
          let championsCards: any[] = [];
          let championsArr: any = Object.values(data);
          for (let champion of championsArr) {
            const name = champion.name;
            const image = `${environment.apiBaseUrl}/img/champion/loading/${champion.id}_0.jpg`;
            const id = champion.id;
            const difficulty = champion.info.difficulty;
            const roles = champion.tags;
            const miniImage = `${environment.apiBaseUrl}/${champion.version}/img/champion/${champion.id}.png`;
            championsCards.push({ name, image, miniImage, id, difficulty, roles });
          }
          return championsCards;
        })
      );
  }

  getChampionById(id: string): Observable<Data> {
    let language = this.appSettings.appSettings.api_language;
    return this.http.get<Data>(
      `${environment.apiBaseUrl}/${this.apiVersion}/data/${language}/champion/${id}.json`
    );
  }
}
