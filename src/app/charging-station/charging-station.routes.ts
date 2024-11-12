import { Routes } from '@angular/router';

export default [
  {
    path: 'charging-station',
    title: 'Charging Stations',
    loadComponent: () =>
      import(
        './charging-station-list-all/charging-station-list-all.component'
      ).then((module) => module.ChargingStationListAllComponent),
  },
] as Routes;
