import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { NgserviceService } from '../ngservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit {
  _adminlist: UserComponent[];

  constructor(private _service: NgserviceService, private _route: Router) { }

  ngOnInit(): void {
    this._service.fetchAdminListFromRemote().subscribe(
      data => {
        console.log("Admin list successfully fetched");
        this._adminlist = data;
      },
      error => console.log("Error : exception occured")
    )
  }

  goToAddAdmin() {
    this._route.navigate(['/adduser']);
  }

  goToEditAdmin(id: number) {
    console.log("Edit producti id : " + id);
    this._route.navigate(['/editproduct/', id]);
  }

  goToViewAdmin(id: number) {
    console.log("View producti id : " + id);
    this._route.navigate(['/viewproduct', id]);
  }

  deleteAdmin(id: number) {
    this._service.deleteProductByIdFromRemote(id).subscribe(
      data => {
        console.debug("Deleted succesfully");
        this._route.navigate(['/productlist']);
      },
      error => console.log("Exception occured")
    )
  }

}
