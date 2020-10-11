import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';

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

  addUserToRemote(user: UserComponent): Observable<any> {
    return this._http.post<any>("http://localhost:8080/adduser", user);
  }

}
