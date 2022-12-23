import { Injectable } from "@angular/core";

@Injectable()
export class LoggingService {
  logStatusChange(status: string) {
    console.log(`The status has been changed to: ${status}.`);
  }
}
