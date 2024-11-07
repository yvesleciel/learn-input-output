import {Component, inject} from '@angular/core';
import {User, UsersService} from "../users.service";

import { TableModule } from 'primeng/table';
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TableModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
   userService = inject(UsersService);
   public users: User[] = this.userService.users;
   router = inject(Router);

  redirectToDetails(id: number): void {
    this.router.navigate(['users', id]);
  }
}

