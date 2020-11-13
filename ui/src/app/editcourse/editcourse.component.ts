import { Component, OnInit } from '@angular/core';
import { CourseComponent } from '../course/course.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {
  course = new CourseComponent;

  isInstructor: boolean;

  constructor(private _route: Router, private _service: NgserviceService, private _activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.authService.isInstructor.subscribe(value => {
      this.isInstructor = value;
    });
  }

  ngOnInit(): void {
    let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.fetchCourseByIdFromRemote(id).subscribe(
      data => {
        console.log("User recieved")
        this.course = data;
      },
      error => console.log("Error : Cannot fetch user by id")
    )
  }

  updateCourseformsubmit() {
    //this.user.password = this.authService.securePassword(this.user.password, this.user.email);
    this._service.updateCourse(this.course).subscribe(
      data => {
        console.log("User added succesfully");
        this._route.navigate(['courses']);
      },
      error => console.log("Error : cannot update user")
    )
  }

  goBack() {
    this._route.navigate(['courses']);
  }
}
