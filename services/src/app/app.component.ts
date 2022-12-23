import { Component, OnInit } from '@angular/core';
import { AccountService } from "./services/account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
  // providing a service in child components will override instance from the app component
  // See hierarchy of dependency injection
})
export class AppComponent implements OnInit {
  accounts: { name: string, status: string }[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}
