import { Component, Input } from '@angular/core';
// import { LoggingService } from "../services/logging.service";
import { AccountService } from "../services/account.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(
    // private loggingService: LoggingService,
    private accountService: AccountService
  ) {};

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
    this.accountService.statusChanged.emit(status)
    // console.log('A server status changed, new status: ' + status);

    // 2. Extracted into account service
    // this.loggingService.logStatusChange(status);
  }
}
