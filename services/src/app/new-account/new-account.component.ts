import { Component } from '@angular/core';
import { AccountService } from "../services/account.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  // passing an instance of LoggingService into component without manual instantiation
  constructor(
    // private loggingService: LoggingService,
    private accountService: AccountService,
  ) {
    this.accountService.statusChanged.subscribe(
      (status: string) => alert("Status updated: " + status))
  };

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus)
    // Extracted into separate service:
    // console.log('A server status changed, new status: ' + accountStatus);

    // 2. Extracted into account service
    // this.logginService.logStatusChange(accountStatus)
  }
}
