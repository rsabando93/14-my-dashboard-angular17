import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
    routes,
    withViewTransitions({
      skipInitialTransition:true,
      onViewTransitionCreated( transitionInfo){
        console.log(transitionInfo);

      }
    }),
    ),
    //Aqui se importan todos loa modulos globales desde la version 17 de Angular
    importProvidersFrom(
      HttpClientModule,
    )
  ]
};

// Forma tradicional de como se importaba Modulos golbales - en el app.module.ts Angular < 17
// imports[ RouterModule, HttpClientModule]
