import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';

import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './adduser/adduser.component';

const routes: Routes = [
  { path: '', component: ProductlistComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'editproduct', component: EditproductComponent },
  { path: 'editproduct/:id', component: EditproductComponent },
  { path: 'viewproduct', component: ViewproductComponent },
  { path: 'viewproduct/:id', component: ViewproductComponent },
  { path: 'productlist', component: ProductlistComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'adduser', component: AdduserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
