import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryTwoComponent } from './accessory-two.component';

describe('AccessoryTwoComponent', () => {
  let component: AccessoryTwoComponent;
  let fixture: ComponentFixture<AccessoryTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoryTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
