import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  user = new UserComponent;

  constructor(private _route: Router, private _service: NgserviceService) { }

  ngOnInit(): void {
  }

  addUserformsubmit() {
    this._service.addUserToRemote(this.user).subscribe(
      data => {
        console.log("data added succesfully");
        this._route.navigate(['userlist']);
      },
      error => console.log("error")
    )
  }

  gotolist() {
    console.log("go back");
    this._route.navigate(['userlist']);
  }
}
