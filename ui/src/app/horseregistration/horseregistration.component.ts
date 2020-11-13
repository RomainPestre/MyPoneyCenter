import { Component, OnInit } from '@angular/core';
import { CourseComponent } from '../course/course.component';
import { NgserviceService } from '../ngservice.service';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HorseComponent } from '../horse/horse.component';

@Component({
  selector: 'app-horseregistration',
  templateUrl: './horseregistration.component.html',
  styleUrls: ['./horseregistration.component.css']
})
export class HorseregistrationComponent implements OnInit {
  courseId: number;
  isInstructor: boolean;

  course: CourseComponent;
  msg: string;

  _horselist: HorseComponent[];
  _horsesidIntList: number[]; //liste des chevaux inscrits au cours

  constructor(private _service: NgserviceService, private authService: AuthService, private _route: Router, private _activatedRoute: ActivatedRoute) {
    this.authService.courseRegistrationId.subscribe(value => {
      this.courseId = value;
    });
    this.authService.isInstructor.subscribe(value => {
      this.isInstructor = value;
    });
  }

  ngOnInit(): void {
    //Récupération du cours
    if (this.courseId != undefined) {
      this._service.fetchCourseByIdFromRemote(this.courseId).subscribe(
        data => {
          this.course = data;

          //On récupère la liste des chevaux pour le cours et la liste des cours pour le cheval
          this._horsesidIntList = this.convertStringToIntList(this.course.horses_id);
        },
        error => console.log("Error")
      )
    } else {
      this.ngOnInit();
    }

    //Récupération des chevaux
    this._service.fetchHorseListFromRemote().subscribe(
      data => {
        console.log("Horses recieved")
        this._horselist = data;
      },
      error => console.log("Error : Cannot fetch horses")
    )
  }

  addHorse(horse: HorseComponent) {
    var _coursesidIntList; //Liste des cours présents dans la bdd du cheval
    _coursesidIntList = this.convertStringToIntList(horse.courses);


    //Update 'horse' : 'courses', 'courses_date'
    if (horse.courses == null) {  //Si le cheval n'est inscrit a aucun cours
      horse.courses = this.course.id.toString();
      horse.courses_date = this.course.date;
    } else {  //Si le cheval est inscrit à au moins un cours
      if (_coursesidIntList.includes(this.course.id) == false) {  //Si le cheval n'est pas déjà inscrit au cours
        horse.courses = horse.courses.concat(',', this.course.id.toString());
        horse.courses_date = horse.courses_date.concat(', ', this.course.date, ' ', this.course.time);
      } else {  //Si le cheval est déjà inscrit au cours
        console.log("Horse is already registered")
      }
    }

    //On save le 'horse' en bdd
    this._service.updateHorse(horse).subscribe(
      data => {
        console.log("Horse succesfully updated");
      },
      error => console.log("Error")
    )


    //Update 'course' : 'horses_id', 'horses_name'
    if (this.course.horses_id == null) {  //S'il n'y a pas de cheval inscrit au cours
      this.course.horses_id = horse.id.toString();
      this.course.horses_name = horse.name;
    } else {  //S'il y a déjà un cheval inscrit au cours
      if (this._horsesidIntList.includes(horse.id) == false) {
        this.course.horses_id = this.course.horses_id.concat(',', horse.id.toString());
        this.course.horses_name = this.course.horses_name.concat(', ', horse.name);
      } else {
        console.log("Horse is already registered")
      }
    }

    //On save le 'course' en bdd
    this._service.updateCourse(this.course).subscribe(
      data => {
        console.log("Course succesfully updated");
      },
      error => console.log("Error")
    )


    //Return to 'courses'
    this._route.navigate(['courses']);

    //faire un système de retour manuel à la liste
    //le bouton d'ajout de cheval disparait a l'enregistrement
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
