import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../model/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private customerservice: CustomerService) { }
  formdata;
  ngOnInit() {
    this.formdata = new FormGroup({
      femail:
        new FormControl("", Validators.compose([
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
        ])),
      name: new FormControl("", Validators.compose([
        Validators.required
      ])),
      message: new FormControl("", Validators.compose([
        Validators.required
      ]))
    })
  }
  onClickSubmit(data) {

    console.log(data);
    var feedback = {
      message: data.message + "\n" + "\n" + "\n" + data.femail,
      subject: "Feedback received from " + data.name
    }
    this.customerservice.feedback(feedback).subscribe({
      next: data => {
        this.formdata.reset();
        console.log(data);
      }
    });
  }

}
