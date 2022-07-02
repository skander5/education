import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { CardProductComponent } from './home-page/card-product/card-product.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatExpansionModule } from '@angular/material/expansion';
import { DemandComponent } from './home-page/demand/demand.component';
import { MatSliderModule } from '@angular/material/slider';
import { PurchaseDemandComponent } from './home-page/purchase-demand/purchase-demand.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAnimationsComponent } from './home-page/card-product/dialog-animations/dialog-animations.component';
import { ContentBodyComponent } from './home-page/content-body/content-body.component';
import { ListCommandComponent } from './list-command/list-command.component';
import { ValidateCommandComponent } from './home-page/validate-command/validate-command.component';
import {MatMenuModule} from '@angular/material/menu';
import {DialogReservation, ListCourseComponent} from './list-course/list-course.component';
import {MatSelectModule} from '@angular/material/select';
import { ValidatedCoursesComponent } from './validated-courses/validated-courses.component';
import { ValidateReservationComponent } from './validate-reservation/validate-reservation.component';
import {
  ConfirmReservationComponent,
  DialogConfirmReservation
} from './confirm-reservation/confirm-reservation.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    CardProductComponent,
    DemandComponent,
    PurchaseDemandComponent,
    DialogAnimationsComponent,
    ContentBodyComponent,
    ListCommandComponent,
    ValidateCommandComponent,
    ListCourseComponent,
    DialogReservation,
    ValidatedCoursesComponent,
    ValidateReservationComponent,
    DialogConfirmReservation,
    ConfirmReservationComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    NgbModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatListModule,
    MatGridListModule,
    MatPaginatorModule,
    MatExpansionModule,
    ScrollingModule,
    NgxPaginationModule,
    HttpClientModule,
    MatSliderModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    MatTableModule,
    MatMenuModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomePageComponent ,children : [
          { path: 'listCourse', component: ListCourseComponent },
        ]},
      { path: 'home/:username', component: HomePageComponent , children : [
          { path: 'listProduct', component: CardProductComponent },
          { path: 'listCommand', component: PurchaseDemandComponent },
          { path: 'listMyDemand', component: DemandComponent },
          { path: 'listReservation', component: ConfirmReservationComponent },
          { path: 'listCourse', component: ListCourseComponent },
          { path: 'myCourses', component: ValidatedCoursesComponent },
          { path: 'listOrder', component: ListCommandComponent }

        ] }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
