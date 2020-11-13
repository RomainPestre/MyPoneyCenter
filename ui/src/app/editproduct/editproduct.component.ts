import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { NgserviceService } from '../ngservice.service';
import { error } from 'protractor';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  product = new ProductComponent;
  productOld = new ProductComponent;
  productNew = new ProductComponent;

  constructor(private _route: Router, private _service: NgserviceService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.fetchProductByIdFromRemote(id).subscribe(
      data => {
        console.log("data recieved")
        this.product = data;
        this.productOld = data;
      },
      error => console.log("error")
    )
  }

  updateProductformsubmit() {
    ///TEST delete puis add
    /*
    this._service.deleteProductByIdFromRemote(this.product.id).subscribe(
      data => {
        console.log("Success : Old object successfully deleted");
      },
      error => {
        console.log("Error : can't delete object");
      }
    )
    console.log("test");
    this.productNew = this.product;
    */
    ///

    ///BASE
    /*
    this._service.addproductToRemote(this.product).subscribe(
      data => {
        console.log("data added succesfully");
        this._route.navigate(['productlist']);
      },
      error => console.log("Error : this object id already exist")
    )
    */
    ///
  }

  updateTestformsubmit() {
    this.product.id = 1;
    this._service.addTest2(this.product).subscribe(
      data => {
        console.log("data added succesfully");
        this._route.navigate(['productlist']);
      },
      error => console.log("Error : this object id already exist")
    )
  }

  gotolist() {
    console.log("go back");
    this._route.navigate(['productlist']);
  }
}
