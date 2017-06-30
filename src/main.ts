import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import {AppModule} from "./app/app-module/AppModule";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

let script = document.createElement('script');
script.type = 'text/javascript';
script.src = environment.mathjaxUrl;
document.getElementsByTagName("head")[0].appendChild(script);
