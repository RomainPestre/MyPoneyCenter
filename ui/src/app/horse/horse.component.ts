import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.css']
})
export class HorseComponent implements OnInit {

  id: number;
  name: string;
  courses: string;
  courses_date: string;

  constructor() { }

  ngOnInit(): void {
  }

}
