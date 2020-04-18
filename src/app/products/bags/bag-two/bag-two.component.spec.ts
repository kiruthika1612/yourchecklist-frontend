import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagTwoComponent } from './bag-two.component';

describe('BagTwoComponent', () => {
  let component: BagTwoComponent;
  let fixture: ComponentFixture<BagTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
