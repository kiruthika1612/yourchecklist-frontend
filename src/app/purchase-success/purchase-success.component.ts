import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-success',
  templateUrl: './purchase-success.component.html',
  styleUrls: ['./purchase-success.component.css']
})
export class PurchaseSuccessComponent implements OnInit {
  address: string = "";
  constructor(private custSvc: CustomerService, private router: Router) { }

  ngOnInit() {
    var userData = "";
    this.custSvc.getUserData().subscribe({
      next: data => {
        userData = data.Complement + " , " + data.Streetno + " , " + data.Streetname + " , " + data.City + " , " + data.Province + " , " + data.Postalcode + " , " + data.Country;
        this.address = userData;
      }
    })

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
