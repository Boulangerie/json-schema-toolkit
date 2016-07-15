import { HTTP_PROVIDERS } from '@angular/http'
import { bootstrap } from '@angular/platform-browser-dynamic'
import { enableProdMode } from '@angular/core'
import { AppComponent } from './app/app.component'
import { environment } from './app/environment'
import { V3Parser } from './app/shared/schema/parsers/v3.parser'

if (environment.production) {
  enableProdMode()
}

bootstrap(AppComponent, [HTTP_PROVIDERS, V3Parser])
