import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cosmetic-one',
  templateUrl: './cosmetic-one.component.html',
  styleUrls: ['./cosmetic-one.component.css']
})
export class CosmeticOneComponent implements OnInit {

  cosmetics: any[];

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

    this.cosmetics = [
      '../../../../assets/images/cosmetics1.JPG',
      '../../../../assets/images/cosmetics1_1.JPG',
      '../../../../assets/images/cosmetics1_2.JPG',
      '../../../../assets/images/cosmetics1_3.JPG'
    ];
  }

}
