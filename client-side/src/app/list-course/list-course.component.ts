import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CourseServiceService} from "../Services/course-service.service";
import {Course} from "../model/Course";
import {DialogAnimationsComponent} from "../home-page/card-product/dialog-animations/dialog-animations.component";
import {Consumer} from "../model/Consumer";
import {Subscriber} from "../model/Subscriber";

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  courseData!:Course[] ;
  p: any;
  subscriber !: Subscriber;
  subscribers:Subscriber[] = [] ;

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

  constructor(public dialog: MatDialog,public courseService:CourseServiceService ) { }

  getCoursesData() {
    this.courseService.findAllCourses().subscribe(
      (data) => {
        this.courseData = data;
      }
    );
  }

  ngOnInit(): void {
    this.getCoursesData();
    const logedUser = localStorage.getItem("consumer");
    if(logedUser) {
      this.subscriber = JSON.parse(localStorage.getItem("consumer") || "");
    }
  }

  getMonth (numMonth:any):string {
    const monthNames = ["JAN", "FEV", "MAR", "AVR", "MAI", "JUI",
      "JUL", "AOU", "SEP", "OCT", "NOV", "DEC"
    ];
    return monthNames[Number(numMonth)-1] ;
  };


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogReservation);
  }

  reserverCourse(course:Course){
    this.subscribers.push(this.subscriber);
    console.log(this.subscriber);

    course.subscriberList = this.subscribers;
    console.log(this.subscribers);
    this.courseService.reserverCours(course).toPromise();
  }


}
@Component({
  selector: 'dialog-reservation',
  template: "<h4>Merci d'envoyer votre CV au wiki@gmail.com</h4>" +
    "<h6>Consulter la rubrique mes cours pour vérifier notre validation</h6>",
})
export class DialogReservation {
  constructor(public dialogRef: MatDialogRef<DialogReservation>) {}
}
