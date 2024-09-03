import {Routes} from "@angular/router";
import {UserRole} from "../enum/UserRole";
import {AuthGuard} from "../services/auth/auth.guard";

export default [

  {
    path: "",
    title: "Liste Utilisateur",
    canActivate: [AuthGuard],
    data: {expectedRole: UserRole.ROLE_SECONDE},
    loadComponent: () =>
      import("./user-list/user-list.component").then(
        (module) => module.UserListComponent,
      ),
  },

] as Routes;
