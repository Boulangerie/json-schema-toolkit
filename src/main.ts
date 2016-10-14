// import { HTTP_PROVIDERS } from '@angular/http'
// import { bootstrap } from '@angular/platform-browser-dynamic'
// import { enableProdMode } from '@angular/core'
// import { AppComponent } from './app/app.component'
// import { environment } from './app/environment'
// import { V3Parser } from './app/shared/schema/parsers/v3.parser'

import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic().bootstrapModule(AppModule);
// bootstrap(AppComponent, [HTTP_PROVIDERS, V3Parser])
