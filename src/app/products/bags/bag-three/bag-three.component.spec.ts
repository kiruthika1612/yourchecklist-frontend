import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagThreeComponent } from './bag-three.component';

describe('BagThreeComponent', () => {
  let component: BagThreeComponent;
  let fixture: ComponentFixture<BagThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
