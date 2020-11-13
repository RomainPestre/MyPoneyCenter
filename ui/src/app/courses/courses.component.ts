import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { AuthService } from '../services/auth.service';
import { CourseComponent } from '../course/course.component';
import { UserComponent } from '../user/user.component';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  course = new CourseComponent;
  _courselist: CourseComponent[];

  connectedUser: UserComponent;
  isUserLoggedIn: boolean;
  isInstructor: boolean;
  isAdmin: boolean;
  isSuper: boolean;

  //Le cours a register
  courseId: BehaviorSubject<number> = new BehaviorSubject<number>(null);

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
    this._service.fetchCourseListFromRemote().subscribe(
      data => {
        console.log("Response recieved");
        this._courselist = data;
      },
      error => console.log("Exception occured")
    )
  }

  convertStringToIntList(string: string) {
    var intList = new Array();
    var stringList;

    if (string == null) {
      return null;
    } else {
      stringList = string.split(',');
      stringList.forEach(element => {
        intList.push(parseInt(element, 10));
      })
    }
    return intList;
  }

  addCourseformsubmit() {
    //Format date : yyyy-mm-dd
    //Format time : hh:mm
    //console.log("Date : " + this.course.date);
    //console.log("Time : " + this.course.time);

    this._service.addCourseToRemote(this.course).subscribe(
      data => {
        console.log("Data added succesfully");
        this._route.navigate(['home']);
      },
      error => console.log("Error")
    )
  }

  register(id: number) {
    this.authService.courseRegistrationId.next(id);
    this._route.navigate(['courseregistration']);
  }

  registerHorse(id: number) {
    this.authService.courseRegistrationId.next(id);
    this._route.navigate(['horseregistration']);
  }

  goToEditCourse(id: number) {
    console.log("Edit course id : " + id);
    this._route.navigate(['/editcourse/', id]);
  }

  deleteCourse(id: number) {
    this._service.deleteCourseByIdFromRemote(id).subscribe(
      data => {
        this._route.navigate(['/home']);
      },
      error => {
        this._route.navigate(['/home']);
      }
    )
  }
}
