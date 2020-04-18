import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trolley-two',
  templateUrl: './trolley-two.component.html',
  styleUrls: ['./trolley-two.component.css']
})
export class TrolleyTwoComponent implements OnInit {

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
      '../../../../assets/images/trolley2.JPG',
      '../../../../assets/images/trolley2_1.JPG',
      '../../../../assets/images/trolley2_2.JPG',
      '../../../../assets/images/trolley2_3.JPG'

    ];
  }

}
