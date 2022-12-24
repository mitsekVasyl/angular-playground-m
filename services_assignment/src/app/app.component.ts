import { Component, OnInit } from '@angular/core';
import { UsersService } from "./services/Users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService] // providing users service here as we need it in components only
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor(private usersService: UsersService) {

  };

  ngOnInit(): void {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers= this.usersService.inactiveUsers
  }
}
