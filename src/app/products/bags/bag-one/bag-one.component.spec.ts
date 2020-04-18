import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagOneComponent } from './bag-one.component';

describe('BagOneComponent', () => {
  let component: BagOneComponent;
  let fixture: ComponentFixture<BagOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
