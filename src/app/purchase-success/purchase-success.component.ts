import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-success',
  templateUrl: './purchase-success.component.html',
  styleUrls: ['./purchase-success.component.css']
})
export class PurchaseSuccessComponent implements OnInit {

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
