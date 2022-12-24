import { Component, Input } from '@angular/core';
import { UsersService } from "../services/Users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private usersService: UsersService) {

  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
