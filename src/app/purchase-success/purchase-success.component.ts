import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-purchase-success',
  templateUrl: './purchase-success.component.html',
  styleUrls: ['./purchase-success.component.css']
})
export class PurchaseSuccessComponent implements OnInit {
  formdata: FormGroup;
  customer = new Customer();
  accountState: boolean;
  accountFailState: boolean;
  wrongPassword: boolean

  constructor(private custSvc: CustomerService, private router: Router) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      pemail:
        new FormControl("", Validators.compose([
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
        ])),
        fname: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      address: new FormControl("", Validators.compose([
        Validators.required
      ])),
      pcity: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      pstate: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      ppostalcode: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      nameoncard: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      cccardno: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      expmonth: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      expyear: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      cvv: new FormControl("", Validators.compose([
        Validators.required,
         
      ]))
    });
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

