import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  serverId: number;
  fragment: string;
  queryParams: object;

  constructor(private serversService: ServersService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Retrieve query params, path param and fragment
    this.queryParams = this.activatedRoute.snapshot.queryParams
    this.serverId = this.activatedRoute.snapshot.params['id'];
    this.fragment = this.activatedRoute.snapshot.fragment

    // subscribe to params updates within the component
    this.activatedRoute.params.subscribe((params) => this.serverId = params['id']);
    this.activatedRoute.fragment.subscribe((fragment) => this.fragment = fragment);

    this.server = this.serversService.getServer(this.serverId);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
