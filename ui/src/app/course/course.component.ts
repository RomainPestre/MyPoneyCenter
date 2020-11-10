import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  id: number;
  date: string;
  time: string;
  size: number;
  users_id: string;
  horses_id: string;
  description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
