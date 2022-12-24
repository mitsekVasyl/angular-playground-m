import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CounterService {
  // Counts events 'active->inactive' and 'inactive->active'
  activeToInactiveCount: number = 0;
  inactiveToActiveCount: number = 0;

  toInactive() {
    this.activeToInactiveCount += 1;
    console.log(`to inactive events count: ${this.activeToInactiveCount}`)
  }

  toActive() {
    this.inactiveToActiveCount += 1;
    console.log(`to active events count: ${this.inactiveToActiveCount}`)
  }
}
