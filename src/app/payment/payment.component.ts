import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from '../model/customer';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  formdata: FormGroup;
  loginState: boolean;
  customer = new Customer();
  showBuy: boolean = false;

  constructor(private customerservice: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.formdata = new FormGroup({
      email:
        new FormControl("", Validators.compose([
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
        ])),
      password: new FormControl("", Validators.compose([
        Validators.required
      ]))
    })
  }
  onClickSubmit(data) {
    this.loginState = false;
    this.customer.email = data.email;
    this.customer.password = data.password;
    console.log(this.customer);
    this.customerservice.auth(this.customer).subscribe({
      next: data => {
        // console.log(data);
        if (data.status) {
          this.showBuy = true;
          // this.router.navigateByUrl('/dashboard/' + data.customerName);
        }
        else {
          this.loginState = true;

        }
      }
    });
  }
  buy() {
    var productId = this.route.snapshot.url.pop().path;
    if (productId != null && this.customerservice.userLoginInfo.cid != null) {
      var purchase = {
        cid: this.customerservice.userLoginInfo.cid,
        pid: productId
      }

      this.customerservice.buyProduct(purchase).subscribe({
        next: data => {
          console.log(data);
          if (data.statusCode == 200) {
            this.router.navigateByUrl('/purchase-success')
          }else{
            this.router.navigateByUrl('/purchase-fail')
          }
        }
      })
    }

  }
}
