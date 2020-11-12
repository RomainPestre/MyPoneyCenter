import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { CourseComponent } from './course/course.component';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http: HttpClient) { }


  fetchProductListFromRemote(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getproductlist");
  }

  addproductToRemote(product : ProductComponent): Observable<any> {
    return this._http.post<any>("http://localhost:8080/addproduct", product);
  }

  fetchProductByIdFromRemote(id: number): Observable<any> {
    return this._http.get <any>("http://localhost:8080/getproductbyid/" + id);
  }

  deleteProductByIdFromRemote(id: number): Observable<any> {
    return this._http.delete<any>("http://localhost:8080/deleteproductbyid/" + id);
  }

  fetchUserListFromRemote(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getuserlist");
  }

  fetchAdminListFromRemote(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getadminlist");
  }

  addUserToRemote(user: UserComponent): Observable<any> {
    return this._http.post<any>("http://localhost:8080/adduser", user);
  }

  fetchUserByIdFromRemote(id: number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getuserbyid/" + id);
  }

  fetchUserByEmailFromRemote(email: string): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getuserbyemail/" + email);
  }

  fetchUserByEmailAndPasswordFromRemote(email: string, password: string): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getuserbyemailandpassword/" + email + "/" + password);
  }

  fetchCourseListFromRemote(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getcourselist");
  }

  addCourseToRemote(course: CourseComponent): Observable<any> {
    return this._http.post<any>("http://localhost:8080/addcourse", course);
  }

  addTest1(test: string): Observable<any> {
    return this._http.post<any>("http://localhost:8080/test", test);
  }

  addTest2(p: ProductComponent): Observable<any> {
    return this._http.post<any>("http://localhost:8080/test2", p);
  }

  updateUser(user: UserComponent): Observable<any> {
    return this._http.post<any>("http://localhost:8080/updateuser", user);
  }

  updateAdmin(user: UserComponent): Observable<any> {
    return this._http.post<any>("http://localhost:8080/updateadmin", user);
  }

  updateCourse(course: CourseComponent): Observable<any> {
    return this._http.post<any>("http://localhost:8080/updatecourse", course);
  }

  fetchCourseByIdFromRemote(id: number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getcoursebyid/" + id);
  }

  fetchUserListByPrivileges(privileges: number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getuserlistbyprivileges/" + privileges);
  }

  deleteUserByIdFromRemote(id: number): Observable<any> {
    return this._http.delete<any>("http://localhost:8080/deleteuserbyid/" + id);
  }

}
