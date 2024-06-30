import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { NgZone } from '@angular/core';

// @ts-ignore
const providers = globalThis.ngZone ? [{provide: NgZone, useValue: globalThis.ngZone}] : [];

platformBrowserDynamic()
  .bootstrapModule(AppModule, {providers})
  .catch((err) => console.error(err));
