import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bag-one',
  templateUrl: './bag-one.component.html',
  styleUrls: ['./bag-one.component.css']
})
export class BagOneComponent implements OnInit {

  bags: any[];

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

    this.bags = [
      '../../../../assets/images/travelbag1.JPG',
      '../../../../assets/images/travelbag1_1.JPG',
      '../../../../assets/images/travelbag1_2.JPG',
      '../../../../assets/images/travelbag1_3.JPG'
    ];
  }

}
