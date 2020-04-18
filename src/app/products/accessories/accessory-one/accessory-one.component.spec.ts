import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryOneComponent } from './accessory-one.component';

describe('AccessoryOneComponent', () => {
  let component: AccessoryOneComponent;
  let fixture: ComponentFixture<AccessoryOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoryOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoryOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
