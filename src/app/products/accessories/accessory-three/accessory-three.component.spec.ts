import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryThreeComponent } from './accessory-three.component';

describe('AccessoryThreeComponent', () => {
  let component: AccessoryThreeComponent;
  let fixture: ComponentFixture<AccessoryThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoryThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoryThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
