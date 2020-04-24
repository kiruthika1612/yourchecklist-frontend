import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../model/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formdata: FormGroup;
  customer = new Customer();
  accountState: boolean;
  accountFailState: boolean;
  wrongPassword: boolean

  constructor(private customerSvc: CustomerService) { }

  ngOnInit() {
    // validating the data in the signup form
    this.formdata = new FormGroup({
      email:
        new FormControl("", Validators.compose([
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
        ])),
      password: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      repassword: new FormControl("", Validators.compose([
        Validators.required
      ])),
      firstName: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      lastName: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      dob: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      streetno: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      complement: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      streetname: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      city: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      province: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      country: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      postalCode: new FormControl("", Validators.compose([
        Validators.required,
      ]))
    });
  }


  onClickSubmit(data) {
    this.wrongPassword = false;
    this.accountState = false;
    this.accountFailState = false;


    this.customer.firstName = data.firstName;
    this.customer.lastName = data.lastName;
    this.customer.email = data.email;
    this.customer.password = data.password;
    this.customer.dob = data.dob;
    this.customer.complement = data.complement;
    this.customer.streetno = data.streetno;
    this.customer.streetname = data.streetname;
    this.customer.city = data.city;
    this.customer.province = data.province;
    this.customer.country = data.country;
    this.customer.postalCode = data.postalCode;
    // matching password and repeat password fields
    if (data.password == data.repassword) {

      console.log(this.customer)

      this.customerSvc.signUp(this.customer).subscribe({
        next: data => {
          if (data.statusCode == '200') {
            this.accountState = true;
            this.formdata.reset();
          }
          else if (data.statusCode == '400') {
            this.accountFailState = true;
          }
        }
      });

    } else {
      this.wrongPassword = true;
    }
  }

}
