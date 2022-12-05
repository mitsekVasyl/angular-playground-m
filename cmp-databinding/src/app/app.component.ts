import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onIntervalEvent(n) {
    if (n % 2 === 0) {
      this.evenNumbers.push(n);
    } else {
      this.oddNumbers.push(n);
    }
  }
}
// export class AppComponent {
//   serverElements = [
//     {type: 'server', name: 'TestServer1', content: 'Test1'},
//   ];
//
//   onServerAdded(serverData: {serverName: string, serverContent: string}) {
//   this.serverElements.push({
//     type: 'server',
//     name: serverData.serverName,
//     content: serverData.serverContent
//   });
// }
//
//   onBlueprintAdded(serverData: {serverName: string, serverContent: string}) {
//     this.serverElements.push({
//       type: 'blueprint',
//       name: serverData.serverName,
//       content: serverData.serverContent
//     });
//   }
// }
