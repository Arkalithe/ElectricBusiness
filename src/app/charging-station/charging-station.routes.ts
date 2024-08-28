import {Routes} from "@angular/router";

export default [
  {
    path: "",
    title: "Charging Stations",
    loadComponent: () =>
      import("./charging-station-list/charging-station-list.component").then(
        (module) => module.ChargingStationListComponent,
      ),
  },
  {
    path: "add",
    title: "Ajout Utilisateur",
    loadComponent: () => import("./charging-station-add/charging-station-add.component").then(
      (module) => module.ChargingStationAddComponent),
  }
] as Routes;
