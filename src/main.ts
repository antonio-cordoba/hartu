import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  const ngr = 'ngRef';
  const ngRef = window[ngr] as unknown as any;
  if (ngRef) {
    ngRef.destroy();
  }
  ref = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));

