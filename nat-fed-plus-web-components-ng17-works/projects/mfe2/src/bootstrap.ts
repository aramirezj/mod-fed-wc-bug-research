import { createCustomElement } from '@angular/elements';
import { createApplication, platformBrowser } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NgZone } from '@angular/core';
import { AppModule } from './app/app.module';



platformBrowser().bootstrapModule(AppModule)

// (async () => {
// console.log(globalThis.ngZone)
//   console.log('me boostrapeoo')
//   const app = await createApplication({
//     providers: [
//       /* your global providers here */
//       globalThis.ngZone ? { provide: NgZone, useValue: globalThis.ngZone } : [],
//     ],
//   });

//   const mfe2Root = createCustomElement(AppComponent, {
//     injector: app.injector,
//   });

//   customElements.define('mfe2-root', mfe2Root);
// })();
