import {Routes} from "@angular/router";
import stationRoutes from './charging-station/charging-station.routes';
import userRoutes from "./user/user-routes";
import {AuthGuard} from "./services/auth/auth.guard";

export default [
  {
    path: "stations",
    canActivate: [AuthGuard],
    children: stationRoutes,
  },
  {
    path: "users",
    canActivate: [AuthGuard],
    children: userRoutes,
  },
  {
    path: "login",
    title: "login",
    loadComponent: () => import("./user/login/login.component").then((module) => module.LoginComponent),
  },
  {
    path: "home",
    title: "Acceuil",
    loadComponent: () => import("./home/home.component").then(module => module.HomeComponent),
  },
] as Routes;
