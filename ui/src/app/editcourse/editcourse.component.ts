import { Component, OnInit } from '@angular/core';
import { CourseComponent } from '../course/course.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { AuthService } from '../services/auth.service';
import { HorseComponent } from '../horse/horse.component';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {
  course = new CourseComponent;
  _horsesnameStringList: string[];

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
        console.log("Course recieved")
        this.course = data;
        //On récupère la liste des id chevaux pour le cours
        this._horsesnameStringList = this.convertStringToStringList(this.course.horses_name);
      },
      error => console.log("Error : Cannot fetch course by id")
    )
  }

  updateCourseformsubmit() {
    //On met à jour la bdd du cours
    this._service.updateCourse(this.course).subscribe(
      data => {
        console.log("Course added succesfully");
        this._route.navigate(['courses']);
      },
      error => console.log("Error : cannot update course")
    )
  }

  convertStringToStringList(string: string) {
    var stringList;

    if (string == null) {
      return null;
    } else {
      stringList = string.split(', ');
    }
    return stringList;
  }

  goBack() {
    this._route.navigate(['courses']);
  }
}
