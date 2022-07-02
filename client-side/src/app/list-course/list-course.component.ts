import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CourseServiceService} from "../Services/course-service.service";
import {Course} from "../model/Course";
import {DialogAnimationsComponent} from "../home-page/card-product/dialog-animations/dialog-animations.component";
import {Consumer} from "../model/Consumer";
import {Subscriber} from "../model/Subscriber";
import {SubscriberCourses} from "../model/SubscriberCourses";
import {Router} from "@angular/router";
import {Category} from "../model/Category";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  courseData!:Course[] ;
  courseDataSaved!:Course[] ;
  p: any;
  subscriber !: Subscriber;
  subscribers:Subscriber[] = [] ;
  categoryCourse!:Category[] ;
  selectedCategory !:Category ;
  listAllReservation : SubscriberCourses[] = []  ;
  listAllReservationForLabel : SubscriberCourses[] = []  ;

  myArray = [
    "widget-49-date-primary",
    "widget-49-date-warning",
    "widget-49-date-success",
    "widget-49-date-danger"
  ];

  randomItem = this.myArray[Math.floor(Math.random()*this.myArray.length)];

   showDateColor() : string {
    return this.myArray[2];
  }

  constructor(public dialog: MatDialog,public courseService:CourseServiceService,private router : Router) { }

  async getCoursesData() {
    return new Promise (resolve => {
    this.courseService.findAllCourses().subscribe(
      (data) => {
        this.courseData = data;
        this.courseDataSaved = data ;
      }
    );
  })
   }
 // const example = this.courseService.findAllCourses().pipe(filter(e => e.filter(c=>c.title === '')));

  async getCoursesFiltred() {
    return new Promise (resolve => {
      this.courseService.findAllCourses().subscribe(
        (data) => {
          this.courseData = data;
          this.courseData.filter(e => {
            return e.category.id === this.selectedCategory.id;
          });
        }
      );
    })
  }

  findAllCategory(){
    this.courseService.findAllCategory().subscribe(
      (data) => {
        this.categoryCourse = data;
      }
    );
  }

  ngOnInit(): void {
    this.findAllCategory();
    this.getCoursesData();
    this.courseService.findAllReservation().subscribe(data => {this.listAllReservation = data;this.listAllReservationForLabel = data});
    const logedUser = localStorage.getItem("consumer");
    if(logedUser) {
      this.subscriber = JSON.parse(localStorage.getItem("consumer") || "");
    }
  }

  findPersentSubscriber(course:Course) : string{
    let listReservationFiltred : SubscriberCourses[] = []  ;
    listReservationFiltred = this.listAllReservation.filter(e=>{
       return e.course.id == course.id
     });
    return "width : " + listReservationFiltred.length * 100 / course.maxSubscriber +"%" ;
  }

  findNumberSubscribed(course:Course):string {
    let listReservationFiltredForLabel : SubscriberCourses[] = []  ;
    listReservationFiltredForLabel = this.listAllReservationForLabel.filter(e=>{
      return e.course.id == course.id
    });
     return  listReservationFiltredForLabel.length + " étuduiant sur " + course.maxSubscriber;
  }

  getMonth (numMonth:any):string {
    const monthNames = ["JAN", "FEV", "MAR", "AVR", "MAI", "JUI",
      "JUL", "AOU", "SEP", "OCT", "NOV", "DEC"
    ];
    return monthNames[Number(numMonth)-1] ;
  };

  async changeCategory() {
    this.courseData = this.courseDataSaved ;
    if(this.selectedCategory)
    this.courseData = this.courseData.filter(e => {
      return e.category.id === this.selectedCategory.id;
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogReservation);
  }

  async reserverCourse(course:Course){
    this.subscribers = [] ;
    this.subscribers.push(this.subscriber);
    console.log(this.subscriber);

    course.subscriberList = this.subscribers;
    const subscriberCourses = {} as SubscriberCourses;
    subscriberCourses.course = course ;
    subscriberCourses.subscriber = this.subscriber;
    subscriberCourses.status = "En attente" ;
    console.log(subscriberCourses);
    await this.courseService.reserverCours(subscriberCourses).toPromise();
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
