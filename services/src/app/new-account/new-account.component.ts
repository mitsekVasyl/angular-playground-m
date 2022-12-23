import { Component } from '@angular/core';
import { LoggingService } from "../services/logging.service";
import { AccountService } from "../services/account.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  // passing an instance of LoggingService into component without manual instantiation
  constructor(private logginService: LoggingService,
              private accountService: AccountService) {};

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus)
    // Extracted into separate service:
    // console.log('A server status changed, new status: ' + accountStatus);
    this.logginService.logStatusChange(accountStatus)
  }
}
