import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';

import {
  withInterceptorsFromDi,
  provideHttpClient,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AuthGuard } from './app/services/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./app/app.routes').then((module) => module.default),
  },
  {
    path: '**',
    title: 'Page not Found',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(
        (module) => module.PageNotFoundComponent,
      ),
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(BrowserModule, FormsModule),

    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
