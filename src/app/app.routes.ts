import {Routes} from "@angular/router";
import stationRoutes from './charging-station/charging-station.routes';
import userRoutes from "./user/user-routes";

export default [{
  path: "login",
  title: "login",
  loadComponent: () => import("./user/login/login.component").then((module) => module.LoginComponent),
},
  {
    path: "stations",
    children: stationRoutes,
  },
  {
    path: "users",
    children: userRoutes,
  },

  {
    path: "home",
    title: "Acceuil",
    loadComponent: () => import("./home/home.component").then(module => module.HomeComponent),
  },
] as Routes;
