import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { CourseComponent } from '../course/course.component';
import { UserComponent } from '../user/user.component';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { connect } from 'net';

@Component({
  selector: 'app-courseregistration',
  templateUrl: './courseregistration.component.html',
  styleUrls: ['./courseregistration.component.css']
})
export class CourseregistrationComponent implements OnInit {
  courseId: number;
  connectedUser: UserComponent;
  isUserLoggedIn: boolean;
  isRegistered: boolean;

  course: CourseComponent;
  msg: string;

  _usersidIntList: number[];
  _coursesidIntList: number[];

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
          //On récupère la liste des utilisateurs pour le cours et la liste des cours pour l'utilisateur
          this._usersidIntList = this.convertStringToIntList(this.course.users_id);
          this._coursesidIntList = this.convertStringToIntList(this.connectedUser.courses);
          console.log("liste d'entiers : " + this._usersidIntList);
        },
        error => console.log("4. error")
      )
    } else {
      this.ngOnInit();
    }
  }

  canRegister(course: CourseComponent) {
    if (this.dispoCheck(course) == true) {
      this.register(course);
    } else {
      this.msg = "This course is already full."
    }
  }

  register(course: CourseComponent) {
    //Ajouter l'id du cours dans la bdd du cavalier
    if (this.connectedUser.courses == null) {
      this.connectedUser.courses = course.id.toString();
      this.connectedUser.courses_date = course.date.concat(' ', course.time);
      console.log("1. Inscription à un premier cours : " + this.connectedUser.courses);
    } else {
      if (this._coursesidIntList.includes(course.id) == false) {
        this.connectedUser.courses = this.connectedUser.courses.concat(",", course.id.toString());
        this.connectedUser.courses_date = this.connectedUser.courses_date.concat(", ", course.date, ' ', course.time);
        console.log("1. Inscription à un nouveau cours : " + this.connectedUser.courses);
      } else {
        this.msg = "You are already registered to this course.";
        console.log("User is already registered")
      }
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
      this.course.users_name = this.connectedUser.firstname.concat(' ', this.connectedUser.name);
      console.log("5. Inscription d'un premier cavalier : " + this.course.users_id)
    } else {
      if (this._usersidIntList.includes(this.connectedUser.id) == false) {
        this.course.users_id = this.course.users_id.concat(",", this.connectedUser.id.toString());
        this.course.users_name = this.course.users_name.concat(", ", this.connectedUser.firstname, this.connectedUser.name);
        console.log("5. Inscription d'un nouveau cavalier : " + this.course.users_id)
      } else {
        console.log("User is already registered")
      }
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

  dispoCheck(course: CourseComponent) {
    var isDispo = false;
    var usersId = null;
    usersId = this.convertStringToIntList(course.users_id);

    if (usersId == null) {
      isDispo = true;
    } else {
      if (usersId.length < course.size) {
        isDispo = true;
      }
    }

    return isDispo;
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
}
