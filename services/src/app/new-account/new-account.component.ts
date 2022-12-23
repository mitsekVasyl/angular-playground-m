import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from "../services/logging.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // passing an instance of LoggingService into component without manual instantiation
  constructor(private logginService: LoggingService) {};
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    // Extracted into separate service:
    // console.log('A server status changed, new status: ' + accountStatus);
    this.logginService.logStatusChange(accountStatus)
  }
}
