import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {




  constructor(private customerSvc: CustomerService, private router: Router) { }
  // updating the navigation bar based on login status
  ngOnInit() {

  }

  toggleLoginState() {
    this.customerSvc.userLoginInfo.userLogin = !this.customerSvc.userLoginInfo.userLogin;
  }

  takeMeToDashboard() {
    var customerName = this.customerSvc.userLoginInfo.cName;
    this.router.navigateByUrl('/dashboard/' + customerName);
  }
}
