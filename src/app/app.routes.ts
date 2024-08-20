import {Routes} from "@angular/router";

export default [
  {
    path: "",
    children: [
      {
        path: "stations",
        title: "Charging Stations",
        loadChildren: () =>
          import("./charging-station/charging-station.routes")
      },
      {
        path: "home",
        title: "Acceuil",
        loadComponent: () => import("./home/home.component").then(module => module.HomeComponent),
      }]
  },

] as Routes;
