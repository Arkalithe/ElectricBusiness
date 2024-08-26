import {Routes} from "@angular/router";

export default [
  {
    path: "",
    title: "Liste Utilisateur",
    loadComponent: () =>
      import("./user-list/user-list.component").then(
        (module) => module.UserListComponent,
      ),
  },
] as Routes;
