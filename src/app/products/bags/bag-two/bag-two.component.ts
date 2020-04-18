import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bag-two',
  templateUrl: './bag-two.component.html',
  styleUrls: ['./bag-two.component.css']
})
export class BagTwoComponent implements OnInit {

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
      '../../../../assets/images/travelbag2.JPG',
      '../../../../assets/images/travelbag2_1.JPG',
      '../../../../assets/images/travelbag2_2.JPG',
      '../../../../assets/images/travelbag2_3.JPG'
    ];
  }

}
