import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cosmetic-three',
  templateUrl: './cosmetic-three.component.html',
  styleUrls: ['./cosmetic-three.component.css']
})
export class CosmeticThreeComponent implements OnInit {

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
      '../../../../assets/images/cosmetics3.JPG',
      '../../../../assets/images/cosmetics3_1.JPG',
      '../../../../assets/images/cosmetics3_2.JPG',
      '../../../../assets/images/cosmetics3_3.JPG'
    ];
  }


}
