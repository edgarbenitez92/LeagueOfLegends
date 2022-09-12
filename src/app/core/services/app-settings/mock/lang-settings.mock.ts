import { AppSettings } from 'src/app/shared/interfaces/app-settings.interface';

export const mockSettings: AppSettings = {
  language: navigator.language.substring(0, 2),
  api_language: 'es_ES',
};
