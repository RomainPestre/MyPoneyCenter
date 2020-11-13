import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';

import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AdminComponent } from './admin/admin.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseregistrationComponent } from './courseregistration/courseregistration.component';
import { EditadminComponent } from './editadmin/editadmin.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { InstructorlistComponent } from './instructorlist/instructorlist.component';
import { EditcourseComponent } from './editcourse/editcourse.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'editproduct', component: EditproductComponent },
  { path: 'editproduct/:id', component: EditproductComponent },
  { path: 'viewproduct', component: ViewproductComponent },
  { path: 'viewproduct/:id', component: ViewproductComponent },
  { path: 'viewuser/:id', component: ViewproductComponent },
  { path: 'productlist', component: ProductlistComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'addadmin', component: AddadminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'edituser', component: EdituserComponent },
  { path: 'edituser/:id', component: EdituserComponent },
  { path: 'editcourse', component: EditcourseComponent },
  { path: 'editcourse/:id', component: EditcourseComponent },
  { path: 'editadmin', component: EditadminComponent },
  { path: 'editadmin/:id', component: EditadminComponent },
  { path: 'adminpanel', component: AdminComponent },
  { path: 'adminlist', component: AdminlistComponent },
  { path: 'instructorlist', component: InstructorlistComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courseregistration', component: CourseregistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
