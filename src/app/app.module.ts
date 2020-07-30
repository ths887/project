import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {MatChipsModule} from '@angular/material/chips';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';


import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { TopCoursesFeeComponent } from './top-courses-fee/top-courses-fee.component';
import { AdmissionDateComponent } from './admission-date/admission-date.component';
import { RegisterComponent } from './register/register.component';
import { ContactNumberComponent } from './contact-number/contact-number.component';
import { BranchesComponent } from './branches/branches.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LoginComponent } from './shared/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import {MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule }from '@angular/forms';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { MaterialModule } from './modules/material-ui/material-ui.module';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
/* Angular 8 http service */
import { HttpClientModule } from '@angular/common/http';
/* Angular 8 CRUD services */
import { ApiService } from './shared/api.service';

import { MatPaginatorModule } from '@angular/material/paginator';

import { MatTableDataSource }from '@angular/material/table';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InfoComponent,
    TopCoursesFeeComponent,
    AdmissionDateComponent,
    RegisterComponent,
    ContactNumberComponent,
    BranchesComponent,
    ReviewsComponent,
    LoginComponent,
    FooterComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentsListComponent,
    StudentsListComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatChipsModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableDataSource,
     NgCircleProgressModule.forRoot({
      "radius": 60,
      "showBackground": false,
      "startFromZero": false,
      "subtitleColor": "black"
    }),
    BrowserAnimationsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
 
 }
 export const environment = {
  production: true
};
