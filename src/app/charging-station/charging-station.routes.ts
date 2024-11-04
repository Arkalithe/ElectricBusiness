import { Routes } from '@angular/router';
import { AuthGuard } from '../services/auth/auth.guard';

export default [
  {
    path: 'all',
    title: 'Charging Stations',
    loadComponent: () =>
      import(
        './charging-station-list-all/charging-station-list-all.component'
      ).then((module) => module.ChargingStationListAllComponent),
  },
  {
    path: 'add',
    title: 'Ajout Utilisateur',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./charging-station-add/charging-station-add.component').then(
        (module) => module.ChargingStationAddComponent,
      ),
  },
] as Routes;
