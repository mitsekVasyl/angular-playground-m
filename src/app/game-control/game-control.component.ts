import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timer = null;
  private n: number = 0;
  @Output() intervalEvent = new EventEmitter<number>();

  constructor() {
  }


  ngOnInit(): void {
  }

  onStart(event): void {
    this.timer = setInterval(() => {
      this.n++
      if (this.n > 10) {
        clearInterval(this.timer)
      } else {
        this.intervalEvent.emit(this.n)
      }
    }, 1000)
  }

  onStop(event): void {
    clearInterval(this.timer)
  }
}
