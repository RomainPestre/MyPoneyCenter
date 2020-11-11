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

  idList: number[];
  idAvailable: number;

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
        this.searchAvailableId();
      },
      error => console.log("Exception occured")
    )
  }

  addCourseformsubmit() {
    //Format date : yyyy-mm-dd
    //Format time : hh:mm
    //console.log("Date : " + this.course.date);
    //console.log("Time : " + this.course.time);

    this.course.id = this.idAvailable;

    this._service.addCourseToRemote(this.course).subscribe(
      data => {
        console.log("Data added succesfully");
        this._route.navigate(['home']);
      },
      error => console.log("Error")
    )
    //this.searchAvailableId();
  }

  searchAvailableId() {
    var idList = [];
    var idAvailable = null;

    this._courselist.forEach(course => {
      idList.push(course.id);
    });
    this.idList = idList;
    //console.log(idList);

    idAvailable = idList[idList.length - 1] + 1;
    //console.log("Id Available : " + idAvailable);

    this.idAvailable = idAvailable;
  }

  register(id: number) {
    console.log(id);

    //Ajouter l'id du cours dans la bdd du cavalier
    if (this.connectedUser.courses == null) {
      this.connectedUser.courses = id.toString();
      console.log("Inscription à un premier cours : " + this.connectedUser.courses)
    } else {
      this.connectedUser.courses = this.connectedUser.courses.concat(",", id.toString());
      console.log("Inscription à un nouveau cours : " + this.connectedUser.courses)
    }
    console.log("this.connectedUser.courses = " + this.connectedUser.courses)
    this._service.addUserToRemote(this.connectedUser).subscribe(
      data => {
        console.log("Data added succesfully");
        //this._route.navigate(['home']);
      },
      error => console.log("Error")
    )

    //Ajouter l'id du cavalier dans la bdd du cours
  }
}
