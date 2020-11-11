import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { AuthService } from '../services/auth.service';
import { CourseComponent } from '../course/course.component';
import { UserComponent } from '../user/user.component';


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
    //Ajouter l'id du cours dans la bdd du cavalier
    if (this.connectedUser.courses == null) {
      this.connectedUser.courses = id.toString();
      console.log("1. Inscription à un premier cours : " + this.connectedUser.courses)
    } else {
      this.connectedUser.courses = this.connectedUser.courses.concat(",", id.toString());
      console.log("1. Inscription à un nouveau cours : " + this.connectedUser.courses)
    }

    this._service.updateUser(this.connectedUser).subscribe(
      data => {
        console.log("2. User updated succesfully");
        //this._route.navigate(['home']);
      },
      error => console.log("2. Error")
    )
    console.log("3. Id du cours : " + this.course.id);

    //Récupérer le cours
    this._service.fetchCourseByIdFromRemote(id).subscribe(
      data => {
        console.log("4. data recieved")
        this.course = data;
      },
      error => console.log("4. error")
    )

    //Ajouter l'id du cavalier dans la bdd du cours
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

    //TODO : régler le problème de synchronisation
  }
}
