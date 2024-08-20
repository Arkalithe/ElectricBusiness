import {Routes} from "@angular/router";

export default [
  {
    path: "",
    children: [
      {
        path: "stations",
        title: "Charging Stations",
        loadComponent: () =>
          import("./charging-station-list/charging-station-list.component").then(
            (module) => module.ChargingStationListComponent,
          ),
      },


    ],
  },
] as Routes;
