import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  product = new ProductComponent;

  constructor(private _route: Router, private _service: NgserviceService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.fetchProductByIdFromRemote(id).subscribe(
      data => {
        console.log("data recieved")
        this.product = data;
      },
      error => console.log("error")
    )
  }

  updateProductformsubmit() {
    this._service.addproductToRemote(this.product).subscribe(
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
