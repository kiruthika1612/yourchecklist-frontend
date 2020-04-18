import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrolleyTwoComponent } from './trolley-two.component';

describe('TrolleyTwoComponent', () => {
  let component: TrolleyTwoComponent;
  let fixture: ComponentFixture<TrolleyTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrolleyTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrolleyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
