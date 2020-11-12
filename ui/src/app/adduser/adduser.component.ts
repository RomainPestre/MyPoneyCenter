import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { UserComponent } from '../user/user.component';
import { sha256 } from 'js-sha256';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  user = new UserComponent;
  _userlist: UserComponent[];
  //idList: number[];     //L'attribution d'un id se fait automatiquement dans le back-end avec @GeneratedValue(strategy = GenerationType.AUTO)
  //idAvailable: number;  //L'attribution d'un id se fait automatiquement dans le back-end avec @GeneratedValue(strategy = GenerationType.AUTO)

  constructor(private _route: Router, private _service: NgserviceService) { }

  ngOnInit(): void {
    //On récupère les IDs existant pour en utiliser un différent
    this._service.fetchUserListFromRemote().subscribe(
      data => {
        console.log("Response recieved");
        this._userlist = data;
        //this.searchAvailableId(); //L'attribution d'un id se fait automatiquement dans le back-end avec @GeneratedValue(strategy = GenerationType.AUTO)
      },
      error => console.log("Exception occured")
    )
  }

  addUserformsubmit() {
    //this.user.id = this.idAvailable;  //L'attribution d'un id se fait automatiquement dans le back-end avec @GeneratedValue(strategy = GenerationType.AUTO)
    this.user.privileges = 0;
    this.user.password = sha256(this.user.password.concat(this.user.email, "MyPoneyCenter"));
    this._service.addUserToRemote(this.user).subscribe(
      data => {
        console.log("data added succesfully");
        //console.log(this.user.password);
        this._route.navigate(['userlist']);
      },
      error => console.log("error")
    )
  }

  /*//L'attribution d'un id se fait automatiquement dans le back-end avec @GeneratedValue(strategy = GenerationType.AUTO)
  searchAvailableId() {
    var idList = [];
    var idAvailable = null;

    this._userlist.forEach(user => {
      idList.push(user.id);
    });
    this.idList = idList;
    //console.log(idList);

    idAvailable = idList[idList.length - 1] + 1;
    //console.log("Id Available : " + idAvailable);

    this.idAvailable = idAvailable;
  }*/

  goback() {
    console.log("go back");
    this._route.navigate(['home']);
  }
}
