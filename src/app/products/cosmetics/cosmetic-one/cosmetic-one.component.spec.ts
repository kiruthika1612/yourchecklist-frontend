import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticOneComponent } from './cosmetic-one.component';

describe('CosmeticOneComponent', () => {
  let component: CosmeticOneComponent;
  let fixture: ComponentFixture<CosmeticOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
