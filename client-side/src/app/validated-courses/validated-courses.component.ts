import { Component, OnInit } from '@angular/core';
import {CourseServiceService} from "../Services/course-service.service";
import {Router} from "@angular/router";
import {Course} from "../model/Course";
import {Subscriber} from "../model/Subscriber";
import {Category} from "../model/Category";

@Component({
  selector: 'app-validated-courses',
  templateUrl: './validated-courses.component.html',
  styleUrls: ['./validated-courses.component.css']
})
export class ValidatedCoursesComponent implements OnInit {


  courseData!:Course[] ;
  p: any;
  subscriber !: Subscriber;
  categoryCourse!:Category[] ;

  constructor(public courseService:CourseServiceService,private router : Router) { }

  myArray = [
    "widget-49-date-primary",
    "widget-49-date-warning",
    "widget-49-date-success",
    "widget-49-date-danger"
  ];

  randomItem = this.myArray[Math.floor(Math.random()*this.myArray.length)];

  showDateColor() : string {
    return this.myArray[Math.floor(Math.random()*this.myArray.length)];
  }

  getCoursesData() {
    this.courseService.findValidatedCoursesBySubscriber(this.subscriber).subscribe(
      (data) => {
        this.courseData = data;
      }
    );
  }

  ngOnInit(): void {
    const logedUser = localStorage.getItem("consumer");
    if(logedUser) {
      this.subscriber = JSON.parse(localStorage.getItem("consumer") || "");
    }
    this.getCoursesData();
  }

  getMonth (numMonth:any):string {
    const monthNames = ["JAN", "FEV", "MAR", "AVR", "MAI", "JUI",
      "JUL", "AOU", "SEP", "OCT", "NOV", "DEC"
    ];
    return monthNames[Number(numMonth)-1] ;
  };

}
