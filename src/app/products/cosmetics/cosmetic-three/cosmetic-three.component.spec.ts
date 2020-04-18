import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticThreeComponent } from './cosmetic-three.component';

describe('CosmeticThreeComponent', () => {
  let component: CosmeticThreeComponent;
  let fixture: ComponentFixture<CosmeticThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
