import { ApplicationConfig } from '@angular/core';
import {provideRouter, Routes} from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes as any as Routes), provideHttpClient()]
};
