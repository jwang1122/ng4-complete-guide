import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng4-complete-guide';

  servers = [];

  onAddServer() {
    this.servers.push("Another Server");
  }

  onRemoveServer(i: number) {
//    this.servers.splice(i); // remove all items from i
    this.servers.splice(i,1); // remove one item at index=i
  }
}
