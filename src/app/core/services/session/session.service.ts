import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  API_VERSION: string = 'api_version';

  constructor() {}

  setApiVersion(value: string): void {
    sessionStorage.setItem(this.API_VERSION, value.toString());
  }

  getApiVersion(): string | null {
    return sessionStorage.getItem(this.API_VERSION);
  }
}
