import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environments/environment";
import {Product} from "../model/Product";
import { Observable } from 'rxjs';
import {Course} from "../model/Course";

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

  public reserverCours(course:Course) : Observable<Course> {
    const body = JSON.stringify(course);
    return this.http.post<Course>(`${this.apiUrl}/reserver`, body,this.optionsRegister);
  }

}
