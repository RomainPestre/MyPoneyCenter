import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  product = new ProductComponent;

  constructor(private _route: Router, private _service: NgserviceService) { }

  ngOnInit(): void {
  }

  addProductformsubmit() {
    this._service.addproductToRemote(this.product).subscribe(
      data => {
        console.log("data added succesfully");
        this._route.navigate(['productlist']);
      },
      error => console.log("error")
    )
  }

  addTestformsubmit() {
    this._service.addTest1(this.product.name).subscribe(
      data => {
        console.log("data added succesfully");
        this._route.navigate(['productlist']);
      },
      error => console.log("error")
    )
  }

  gotolist() {
    console.log("go back");
    this._route.navigate(['productlist']);
  }
}
