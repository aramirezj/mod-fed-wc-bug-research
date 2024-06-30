import { Routes, UrlMatcher } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Add this import:
import { loadRemoteModule } from '@angular-architects/native-federation';
import { WrapperComponent } from './wrapper/wrapper.component';
import { WrapperConfig } from './wrapper/wrapper-config';
import { startsWith } from './starts-with';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  // Add this route:
  {
    path: 'flights',
    component: WrapperComponent,
    data: {
      config: {
        remoteName: 'mfe1',
        exposedModule: './web-components',
        elementName: 'mfe1-root',
      } as WrapperConfig,
    }
  },
  {
    path: 'passengers',
    component: WrapperComponent,
    data: {
      config: {
        remoteName: 'mfe2',
        exposedModule: './web-components',
        elementName: 'mfe2-root',
      } as WrapperConfig,
    },
  },

  {
    path: 'svelte-mfe',
    component: WrapperComponent,
    data: {
      config: {
        remoteName: 'svelte-mfe',
        exposedModule: './web-components',
        elementName: 'svelte-mfe',
      } as WrapperConfig,
    },
  },

  {
    path: 'react-mfe',
    component: WrapperComponent,
    data: {
      config: {
        remoteName: 'react-mfe',
        exposedModule: './web-components',
        elementName: 'react-mfe',
      } as WrapperConfig,
    },
  },


  {
    matcher: startsWith('profile'),
    component: WrapperComponent,
    data: {
      config: {
        remoteName: 'mfe3',
        exposedModule: './web-components',
        elementName: 'mfe3-root',
      } as WrapperConfig,
    },
  },

  {
    path: '**',
    component: NotFoundComponent,
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];


