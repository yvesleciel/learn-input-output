import {Component, inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User, UsersService} from "../users.service";
import {PrintUserComponent} from "../print-user/print-user.component";


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    PrintUserComponent
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnChanges{
 // @Input() id: string = '';
 id: string = '';
 route = inject(ActivatedRoute);
 userService = inject(UsersService);
 user: User;
 private router = inject(Router);

  constructor() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log('User Id: ', this.id);
    this.user = this.userService.getUser(Number(this.id));
    console.log('current user: ', this.user)
  }

  setName(name: string): void {
    console.log('set name ', name);
    this.user.name = name;
    this.router.navigate(['users']);
  }

  ngOnChanges(changes: SimpleChanges): void {
   // console.log('User Id: ', this.id);
  }


}
