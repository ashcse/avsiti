import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  public courseName: string;
  public location: string;

  ngOnInit(): void {
    this.courseName = 'Electric';
    this.location = '../../assets/images/electric.jpg';
  }
  

}

