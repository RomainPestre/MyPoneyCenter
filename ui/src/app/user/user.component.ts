import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  id: number;
  email: string;
  password: string;
  name: string;
  firstname: string;
  phone: string;
  license: number;
  privileges: number;

  ngOnInit(): void {
  }

}
