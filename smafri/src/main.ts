import { bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// für service 
import { provideHttpClient } from '@angular/common/http';

// übung 
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/in-memory-data.service';
// ab angu 19
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(), // service 
    //ab angu 19
   importProvidersFrom(InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }))
  ]
  //davor importProviders... hier 
}).catch(err => console.error(err));