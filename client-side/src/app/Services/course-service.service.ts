import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environments/environment";
import {Product} from "../model/Product";
import { Observable } from 'rxjs';
import {Course} from "../model/Course";
import {SubscriberCourses} from "../model/SubscriberCourses";
import {Subscriber} from "../model/Subscriber";
import {Category} from "../model/Category";

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  private apiUrl: string;
  optionsRegister = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  };

  constructor(private http: HttpClient, private routerService: ActivatedRoute) {
    this.apiUrl = environment.apibaseUrl;
  }

  public findAllCourses(): Observable<Course[]> {
    const headers = new HttpHeaders();
    return this.http.get<Course[]>(`${this.apiUrl}/findAllCourses`, this.optionsRegister);
  }

  public findAllCategory(): Observable<Category[]> {
    const headers = new HttpHeaders();
    return this.http.get<Category[]>(`${this.apiUrl}/findAllCategory`, this.optionsRegister);
  }

  public findValidatedCoursesBySubscriber(subscriber:Subscriber): Observable<Course[]> {
    const headers = new HttpHeaders();
    const body = JSON.stringify(subscriber);
    return this.http.post<Course[]>(`${this.apiUrl}/findAllCoursesBySubscriber`, body ,this.optionsRegister);
  }

  public reserverCours(subscriberCourses:SubscriberCourses) : Observable<Course> {
    const body = JSON.stringify(subscriberCourses);
    return this.http.post<Course>(`${this.apiUrl}/reserver`, body,this.optionsRegister);
  }

  public findAllReservation() : Observable<SubscriberCourses> {
    return this.http.get<SubscriberCourses>(`${this.apiUrl}/findAllReservation`, this.optionsRegister);
  }

}
