import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { UsersService } from "../users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute,
              private userService: UsersService) { }

  ngOnInit() {
    let id: number = parseInt(this.route.snapshot.params['id']);
    let name: string = this.userService.getUser(id).name;
    this.user = { id, name }

    this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = this.userService.getUser(this.user.id).name;
    })
  }

}
