import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticTwoComponent } from './cosmetic-two.component';

describe('CosmeticTwoComponent', () => {
  let component: CosmeticTwoComponent;
  let fixture: ComponentFixture<CosmeticTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
