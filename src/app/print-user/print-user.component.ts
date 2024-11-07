import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../users.service";

@Component({
  selector: 'app-print-user',
  standalone: true,
  imports: [],
  templateUrl: './print-user.component.html',
  styleUrl: './print-user.component.scss'
})
export class PrintUserComponent {
  @Input() printUser?: User;
  @Output() username = new EventEmitter();

  setName(name: string | undefined) {
    return this.username.emit(name?.concat(' vanesta'));
  }
}
