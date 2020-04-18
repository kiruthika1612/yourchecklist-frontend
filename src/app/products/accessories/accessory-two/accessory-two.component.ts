import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessory-two',
  templateUrl: './accessory-two.component.html',
  styleUrls: ['./accessory-two.component.css']
})
export class AccessoryTwoComponent implements OnInit {

  accessories: any[];

  responsiveOptions;

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {

    this.accessories = [
      '../../../../assets/images/travelacc2.JPG',
      '../../../../assets/images/travelacc2_1.JPG',
      '../../../../assets/images/travelacc2_2.JPG',
      '../../../../assets/images/travelacc2_3.JPG'
    ];
  }

}
