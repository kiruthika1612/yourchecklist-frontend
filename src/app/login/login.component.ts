import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../model/customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata: FormGroup;
  loginState: boolean;
  customer = new Customer();
  constructor(private customerservice: CustomerService, private router: Router) { }

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
    this.loginState=false;
    this.customer.email = data.email;
    this.customer.password = data.password;
    console.log(this.customer);
    this.customerservice.auth(this.customer).subscribe({
      next: data => {
        // console.log(data);
        if (data.status) {
          this.router.navigateByUrl('/dashboard/'+data.customerName);
        }
        else
        {
          this.loginState=true;
          
        }
      }
    });
  }
}
