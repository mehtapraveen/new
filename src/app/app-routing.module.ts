import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/student',pathMatch:'full'},
  {path:'student',component:StudentListComponent},
  {path:'course',component:CourseListComponent},
  {path:'course/:id',component:CourseDetailsComponent},
  {path:"**",component:PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
