import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { Router } from '@angular/router';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  _productlist: ProductComponent[];
  constructor(private _service: NgserviceService, private _route: Router) { }

  ngOnInit(): void {
    this._service.fetchProductListFromRemote().subscribe(
      data => {
        console.log("Response recieved");
        this._productlist = data;
      },
      error=>console.log("Exception occured")
    )
  }

  goToAddProduct() {
    this._route.navigate(['/addproduct']);
  }

  goToEditProduct(id: number) {
    console.log("Edit producti id : " + id);
    this._route.navigate(['/editproduct/', id]);
  }

  goToViewProduct(id: number) {
    console.log("View producti id : " + id);
    this._route.navigate(['/viewproduct', id]);
  }

  deleteProduct(id: number) {
    this._service.deleteProductByIdFromRemote(id).subscribe(
      data => {
        console.debug("Deleted succesfully");
        this._route.navigate(['/productlist']);
      },
      error => console.log("Exception occured")
    )
  }

}
