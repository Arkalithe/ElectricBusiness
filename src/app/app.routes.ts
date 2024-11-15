import { Routes } from '@angular/router';
import { noAuthGuard } from './guards/noAuth/no-auth.guard';
import { authGuard } from './guards/auth/auth.guard';

export default [
  {
    path: 'stations/details/:id',
    title: 'Charging Stations Details',
    loadComponent: () =>
      import(
        './pages/charging-station-details/charging-station-details.component'
      ).then((module) => module.ChargingStationDetailsComponent),
  },
  {
    path: 'update-user/:id',
    title: 'User Update',
    loadComponent: () =>
      import('./components/user-update/user-update.component').then(
        (module) => module.UserUpdateComponent,
      ),
  },
  {
    path: 'login',
    title: 'Login',
    canActivate: [noAuthGuard],
    loadComponent: () =>
      import('./pages/login/login.component').then(
        (module) => module.LoginComponent,
      ),
  },
  {
    path: 'stations',
    title: 'Charging Stations',
    loadComponent: () =>
      import(
        './pages/charging-station-list-all/charging-station-list-all.component'
      ).then((module) => module.ChargingStationListAllComponent),
  },
  {
    path: 'profile',
    title: 'Profile',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./components/profile-history/profile-history.component').then(
        (module) => module.ProfileHistoryComponent,
      ),
  },
  {
    path: 'register',
    title: 'Register',
    canActivate: [noAuthGuard],
    loadComponent: () =>
      import('./pages/signup/signup.component').then(
        (module) => module.SignupComponent,
      ),
  },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () =>
      import('./pages/home/home.component').then(
        (module) => module.HomeComponent,
      ),
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
      import('./pages/page-not-found/page-not-found.component').then(
        (module) => module.PageNotFoundComponent,
      ),
  },
] as Routes;
