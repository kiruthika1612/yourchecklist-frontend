import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formdata: FormGroup;

  constructor() { }

  ngOnInit() {
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
        Validators.required,
      ]))
    });
  }


  onClickSubmit(data) {
    console.log(data)

  }

}
