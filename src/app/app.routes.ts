import { Routes } from '@angular/router';
import stationRoutes from './charging-station/charging-station.routes';

export default [
  {
    path: 'stations',
    children: stationRoutes,
  },
  {
    path: 'login',
    title: 'Login',
    loadComponent: () =>
      import('./user/login/login.component').then(
        (module) => module.LoginComponent,
      ),
  },
  {
    path: 'profile',
    title: 'Profile',
    loadComponent: () =>
      import('./components/profile-history/profile-history.component').then(
        (module) => module.ProfileHistoryComponent,
      ),
  },
  {
    path: 'register',
    title: 'Register',
    loadComponent: () =>
      import('./user/signup/signup.component').then(
        (module) => module.SignupComponent,
      ),
  },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () =>
      import('./home/home.component').then((module) => module.HomeComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    title: 'Page Not Found',
    loadComponent: () =>
      import('./page-not-found/page-not-found.component').then(
        (module) => module.PageNotFoundComponent,
      ),
  },
] as Routes;
