import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users: User[] = [{id:1, email: 'toto@yahoo.fr', name: 'toto', phone: '0605231452'},
    {id:2, email:'abega@gmail.com', name: 'abega', phone: '0605231443'},
    {id:3, email:'test@gmail.com', name: 'test', phone: '0607231443'}];

  constructor() { }

  getUser(id: number): User {
    return <User> this.users.find(user => user.id === id);
  }
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}
