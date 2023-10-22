import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root',
})
export class SummonerVersionService {
  constructor(private http: HttpClient, private sessionService: SessionService) {}

  getLeagueOfLegendsVersions(): Observable<string[]> {
    return this.http
      .get<string[]>('https://ddragon.leagueoflegends.com/api/versions.json')
      .pipe(tap((versions) => this.sessionService.setApiVersion(versions[0])));
  }
}
