import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trolley-one',
  templateUrl: './trolley-one.component.html',
  styleUrls: ['./trolley-one.component.css']
})
export class TrolleyOneComponent implements OnInit {

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
      '../../../../assets/images/trolley1.JPG',
      '../../../../assets/images/trolley1_1.JPG',
      '../../../../assets/images/trolley1_2.JPG',
      '../../../../assets/images/trolley1_3.JPG',
      '../../../../assets/images/trolley1_4.JPG',
      '../../../../assets/images/trolley1_5.JPG',
     
    ];

  }
  
}
