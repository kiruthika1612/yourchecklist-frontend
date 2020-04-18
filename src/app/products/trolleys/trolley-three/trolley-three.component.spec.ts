import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrolleyThreeComponent } from './trolley-three.component';

describe('TrolleyThreeComponent', () => {
  let component: TrolleyThreeComponent;
  let fixture: ComponentFixture<TrolleyThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrolleyThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrolleyThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
