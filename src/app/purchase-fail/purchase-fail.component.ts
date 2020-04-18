import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-fail',
  templateUrl: './purchase-fail.component.html',
  styleUrls: ['./purchase-fail.component.css']
})
export class PurchaseFailComponent implements OnInit {

  constructor(private custSvc: CustomerService, private router: Router) { }

  ngOnInit() {
  }

  navigateToDashboard() {
    var userName = this.custSvc.userLoginInfo.cName;
    if (userName != null)
      this.router.navigateByUrl('/dashboard/' + userName)
    else {
      this.router.navigateByUrl('/login')
    }
  }

}
