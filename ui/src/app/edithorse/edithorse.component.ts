import { Component, OnInit } from '@angular/core';
import { HorseComponent } from '../horse/horse.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-edithorse',
  templateUrl: './edithorse.component.html',
  styleUrls: ['./edithorse.component.css']
})
export class EdithorseComponent implements OnInit {
  horse = new HorseComponent;

  isAdmin: boolean;

  constructor(private _route: Router, private _service: NgserviceService, private _activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.authService.isAdmin.subscribe(value => {
      this.isAdmin = value;
    });
  }

  ngOnInit(): void {
    let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.fetchHorseByIdFromRemote(id).subscribe(
      data => {
        console.log("Horse recieved")
        this.horse = data;
      },
      error => console.log("Error : Cannot fetch horse by id")
    )
  }

  updateCourseformsubmit() {
    this._service.updateHorse(this.horse).subscribe(
      data => {
        console.log("Horse added succesfully");
        this._route.navigate(['horselist']);
      },
      error => console.log("Error : cannot update horse")
    )
  }

  goBack() {
    this._route.navigate(['horselist']);
  }
}
