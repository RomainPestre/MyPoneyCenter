import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
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

  gotolist() {
    console.log("go back");
    this._route.navigate(['productlist']);
  }
}
