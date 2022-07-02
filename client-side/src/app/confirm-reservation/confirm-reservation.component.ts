import { Component, OnInit } from '@angular/core';
import {CourseServiceService} from "../Services/course-service.service";
import {Router} from "@angular/router";
import {Course} from "../model/Course";
import {Subscriber} from "../model/Subscriber";
import {Category} from "../model/Category";
import {SubscriberCourses} from "../model/SubscriberCourses";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogReservation} from "../list-course/list-course.component";
import {DialogAnimationsComponent} from "../home-page/card-product/dialog-animations/dialog-animations.component";

@Component({
  selector: 'app-confirm-reservation',
  templateUrl: './confirm-reservation.component.html',
  styleUrls: ['./confirm-reservation.component.css']
})
export class ConfirmReservationComponent implements OnInit {


  subscriberCourses!:SubscriberCourses[] ;
  p: any;
  subscriber !: Subscriber;
  categoryCourse!:Category[] ;

  constructor(public courseService:CourseServiceService,private router : Router,public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsComponent);
  }

  ngOnInit(): void {
    const logedUser = localStorage.getItem("consumer");
    if(logedUser) {
      this.subscriber = JSON.parse(localStorage.getItem("consumer") || "");
    }
    this.getsubscriberCourses();
  }

  displayedColumns: string[] = ['N°', 'cours', 'duree', 'étudiant' , 'action'];


  getsubscriberCourses() {
      this.courseService.findAllReservation().subscribe(
        (data) => {
          this.subscriberCourses = data;
        }
      );
  }

  async confirmReservation(subscriberCourses:SubscriberCourses) {
    subscriberCourses.status = "Valider" ;
    await this.courseService.addUpdateCourseSubscriber(subscriberCourses).toPromise();
    this.getsubscriberCourses();
  }

}
@Component({
  selector: 'dialog-reservation',
  template: "<h4>Action effectuée avec succès</h4>" +
    "<h6>Consulter la rubrique mes cours pour vérifier la validation</h6>",
})
export class DialogConfirmReservation {
  constructor(public dialogRef: MatDialogRef<DialogConfirmReservation>) {}
}
