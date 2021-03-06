import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trolley-three',
  templateUrl: './trolley-three.component.html',
  styleUrls: ['./trolley-three.component.css']
})
export class TrolleyThreeComponent implements OnInit {

  trolleys: any[];

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

    this.trolleys = [
      '../../../../assets/images/trolley3.JPG',
      '../../../../assets/images/trolley3_1.JPG',
      '../../../../assets/images/trolley3_2.JPG',
      '../../../../assets/images/trolley3_3.JPG'

    ];
  }

}
