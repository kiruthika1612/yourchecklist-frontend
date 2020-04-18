import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessory-one',
  templateUrl: './accessory-one.component.html',
  styleUrls: ['./accessory-one.component.css']
})
export class AccessoryOneComponent implements OnInit {

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
      '../../../../assets/images/travelacc1.JPG',
      '../../../../assets/images/travelacc1_1.JPG',
      '../../../../assets/images/travelacc1_2.JPG',
      '../../../../assets/images/travelacc1_3.JPG'
    ];
  }


}
