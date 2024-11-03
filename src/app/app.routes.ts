import { Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {UserDetailsComponent} from "./user-details/user-details.component";

export const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent
  },
  {
    path: '',
    redirectTo: 'users', pathMatch: 'full',
  }
];
