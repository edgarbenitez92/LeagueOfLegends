import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModuleConfig } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const translateModuleConfig: TranslateModuleConfig = {
  defaultLanguage: 'es',
  loader: {
    provide: TranslateLoader,
    useFactory: (http: HttpClient) => {
      return new TranslateHttpLoader(http);
    },
    deps: [HttpClient],
  },
};
