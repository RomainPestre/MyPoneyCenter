import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { CoursesComponent } from '../courses/courses.component';
import { CourseComponent } from '../course/course.component';
import { UserComponent } from '../user/user.component';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courseregistration',
  templateUrl: './courseregistration.component.html',
  styleUrls: ['./courseregistration.component.css']
})
export class CourseregistrationComponent implements OnInit {
  courseId: number;
  connectedUser: UserComponent;
  isUserLoggedIn: boolean;

  course: CourseComponent;

  constructor(private _service: NgserviceService, private authService: AuthService, private _route: Router, private _activatedRoute: ActivatedRoute) {
    this.authService.courseRegistrationId.subscribe(value => {
      this.courseId = value;
    });
    this.authService.connectedUser.subscribe(value => {
      this.connectedUser = value;
    });
    this.authService.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
    });
  }

  ngOnInit(): void {
    if (this.courseId != undefined) {
      this._service.fetchCourseByIdFromRemote(this.courseId).subscribe(
        data => {
          console.log("4. data recieved")
          this.course = data;
        },
        error => console.log("4. error")
      )
    } else {
      this.ngOnInit();
    }
  }

  register(id: number) {
    //Ajouter l'id du cours dans la bdd du cavalier
    if (this.connectedUser.courses == null) {
      this.connectedUser.courses = id.toString();
      console.log("1. Inscription à un premier cours : " + this.connectedUser.courses);
    } else {
      this.connectedUser.courses = this.connectedUser.courses.concat(",", id.toString());
      console.log("1. Inscription à un nouveau cours : " + this.connectedUser.courses);
    }

    this._service.updateUser(this.connectedUser).subscribe(
      data => {
        console.log("2. User updated succesfully");
        //this._route.navigate(['home']);
      },
      error => console.log("2. Error")
    )
    console.log("3. Id du cours : " + this.course.id);







    //Ajouter l'id du cavalier dans la bdd du cours       DANS LA CONFIRMATION
    if (this.course.users_id == null) {
      this.course.users_id = this.connectedUser.id.toString();
      console.log("5. Inscription d'un premier cavalier : " + this.course.users_id)
    } else {
      this.course.users_id = this.course.users_id.concat(",", this.connectedUser.id.toString());
      console.log("5. Inscription d'un nouveau cavalier : " + this.course.users_id)
    }

    this._service.updateCourse(this.course).subscribe(
      data => {
        console.log("6. Course updated succesfully");
        //this._route.navigate(['home']);
      },
      error => console.log("6. Error : cannot update course")
    )


    this._route.navigate(['home']);
  }

  goToCourses() {
    this._route.navigate(['courses']);
  }
}
