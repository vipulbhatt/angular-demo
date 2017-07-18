import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UserService]
})
export class UsersComponent implements OnInit {

  users = [];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getAllUser().subscribe(data => this.users = data);
  }

}
