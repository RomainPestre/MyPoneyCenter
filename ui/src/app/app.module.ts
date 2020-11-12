import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppproductComponent } from './appproduct/appproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { SignupComponent } from './signup/signup.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { EdituserComponent } from './edituser/edituser.component';
import { AdminComponent } from './admin/admin.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { CourseregistrationComponent } from './courseregistration/courseregistration.component';

@NgModule({
  declarations: [
    AppComponent,
    AppproductComponent,
    ProductlistComponent,
    EditproductComponent,
    ViewproductComponent,
    ProductComponent,
    AddproductComponent,
    NavbarComponent,
    UserComponent,
    UserlistComponent,
    SignupComponent,
    AdduserComponent,
    LoginComponent,
    HomeComponent,
    EdituserComponent,
    AdminComponent,
    AdminlistComponent,
    CoursesComponent,
    CourseComponent,
    CourseregistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
