import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (!(window as any).shell && environment.production) {
  try {
    enableProdMode();
  } catch (e) {
    console.log(e);
  }
}

declare const require: any;
const ngVersion = require('../package.json').dependencies['@angular/core'];

(window as any).plattform = (window as any).plattform || {};

let platform = (window as any).plattform[ngVersion];

if (!platform) {
  platform = platformBrowserDynamic();
  (window as any).plattform[ngVersion] = platform;
}

platform.bootstrapModule(AppModule)
  .catch(console.error);
