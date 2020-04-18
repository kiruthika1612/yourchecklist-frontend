import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bag-three',
  templateUrl: './bag-three.component.html',
  styleUrls: ['./bag-three.component.css']
})
export class BagThreeComponent implements OnInit {

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
      '../../../../assets/images/travelbag3.JPG',
      '../../../../assets/images/travelbag3_1.JPG',
      '../../../../assets/images/travelbag3_2.JPG',
      '../../../../assets/images/travelbag3_3.JPG'
    ];
  }

}
