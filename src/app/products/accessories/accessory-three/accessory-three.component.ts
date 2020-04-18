import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessory-three',
  templateUrl: './accessory-three.component.html',
  styleUrls: ['./accessory-three.component.css']
})
export class AccessoryThreeComponent implements OnInit {
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
      '../../../../assets/images/travelacc3.JPG',
      '../../../../assets/images/travelacc3_1.JPG',
      '../../../../assets/images/travelacc3_2.JPG',
      '../../../../assets/images/travelacc3_3.JPG'
    ];
  }

}
