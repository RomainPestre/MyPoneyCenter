import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { AuthService } from '../services/auth.service';
import { CourseComponent } from '../course/course.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  course = new CourseComponent;
  _courselist: CourseComponent[];

  isInstructor: boolean;
  isAdmin: boolean;
  isSuper: boolean;

  constructor(private _route: Router, private _service: NgserviceService, private _activatedRoute: ActivatedRoute, private authService: AuthService) {
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
    this._service.fetchCourseListFromRemote().subscribe(
      data => {
        console.log("Response recieved");
        this._courselist = data;
      },
      error => console.log("Exception occured")
    )
  }

  addCourseformsubmit() {
    console.log("Date : " + this.course.date);
    console.log("Time : " + this.course.time);
    /*
    this._service.addCourseToRemote(this.course).subscribe(
      data => {
        console.log("Data added succesfully");
        this._route.navigate(['userlist']);
      },
      error => console.log("Error")
    )*/
  }

}
