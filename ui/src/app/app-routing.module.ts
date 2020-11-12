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
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'edituser', component: EdituserComponent },
  { path: 'editadmin', component: EditadminComponent },
  { path: 'editadmin/:id', component: EditadminComponent },
  { path: 'adminpanel', component: AdminComponent },
  { path: 'adminlist', component: AdminlistComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courseregistration', component: CourseregistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
