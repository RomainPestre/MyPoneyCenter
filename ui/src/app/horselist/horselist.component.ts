import { Component, OnInit } from '@angular/core';
import { HorseComponent } from '../horse/horse.component';
import { UserComponent } from '../user/user.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-horselist',
  templateUrl: './horselist.component.html',
  styleUrls: ['./horselist.component.css']
})
export class HorselistComponent implements OnInit {
  horse = new HorseComponent;
  _horselist: HorselistComponent[];

  connectedUser: UserComponent;
  isUserLoggedIn: boolean;
  isInstructor: boolean;
  isAdmin: boolean;
  isSuper: boolean;

  constructor(private _route: Router, private _service: NgserviceService, private _activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.authService.connectedUser.subscribe(value => {
      this.connectedUser = value;
    });
    this.authService.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
    });
    this.authService.isInstructor.subscribe(value => {
      this.isInstructor = value;
    });
    this.authService.isAdmin.subscribe(value => {
      this.isAdmin = value;
    });
    this.authService.isSuper.subscribe(value => {
      this.isSuper = value;
    });
  }

  ngOnInit(): void {
    this._service.fetchHorseListFromRemote().subscribe(
      data => {
        console.log("Response recieved");
        this._horselist = data;
      },
      error => console.log("Exception occured")
    )
  }

  addHorseformsubmit() {
    this._service.addHorseToRemote(this.horse).subscribe(
      data => {
        console.log("Data added succesfully");
        this._route.navigate(['adminpanel']);
      },
      error => console.log("Error")
    )
  }

  goToEditHorse(id: number) {
    console.log("Edit horse id : " + id);
    this._route.navigate(['/edithorse/', id]);
  }

  deleteHorse(id: number) {
    this._service.deleteHorseByIdFromRemote(id).subscribe(
      data => {
        this._route.navigate(['/adminpanel']);
      },
      error => {
        this._route.navigate(['/adminpanel']);
      }
    )
  }
}
