import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent }from './info/info.component';
import { TopCoursesFeeComponent } from './top-courses-fee/top-courses-fee.component';
import { AdmissionDateComponent } from './admission-date/admission-date.component';
import { RegisterComponent } from './register/register.component';
import { ContactNumberComponent } from './contact-number/contact-number.component';
import { BranchesComponent } from './branches/branches.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LoginComponent } from './shared/login/login.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';


const routes: Routes = [{path:'',component:HomeComponent},
{path:'info',component:InfoComponent},
{path:'course$fees',component:TopCoursesFeeComponent},
{path:'admission',component:AdmissionDateComponent},
{path:'register',component:RegisterComponent},
{path:'contact',component:ContactNumberComponent},
{path:'branches',component:BranchesComponent},
{path:'reviews',component:ReviewsComponent},
  {path:'login',component:LoginComponent,
  children:[
    { path: '', pathMatch: 'full', redirectTo: 'add-student' },
    { path: 'add-student', component: AddStudentComponent },
    { path: 'edit-student/:id', component: EditStudentComponent },
    { path: 'student-list', component: StudentsListComponent },
  ]

  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
