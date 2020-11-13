import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isSession: string;

  constructor(private authService: AuthService) {
    this.authService.isSession.subscribe(value => {
      this.isSession = value;
    })
  }

  ngOnInit(): void {
  }
}
