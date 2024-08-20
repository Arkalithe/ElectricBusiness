import {Routes} from "@angular/router";
import stationRoutes from './charging-station/charging-station.routes';

export default [
  {
    path: "stations",
    children: stationRoutes,
  },
  {
    path: "home",
    title: "Acceuil",
    loadComponent: () => import("./home/home.component").then(module => module.HomeComponent),
  },
] as Routes;
