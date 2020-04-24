import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private custSvc: CustomerService) { }

  myProducts: any[] = undefined;
  ngOnInit() {
    this.getMyProducts();
  }
  // getting products using user login information
  getMyProducts() {
    var data = {
      cid: this.custSvc.userLoginInfo.cid
    }
    this.custSvc.fetchMyProducts(data).subscribe({
      next: data => {
        this.myProducts = data.products;
        console.log(this.myProducts)
      }
    })
  }
}
