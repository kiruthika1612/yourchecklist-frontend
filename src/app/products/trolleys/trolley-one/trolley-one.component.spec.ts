import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrolleyOneComponent } from './trolley-one.component';

describe('TrolleyOneComponent', () => {
  let component: TrolleyOneComponent;
  let fixture: ComponentFixture<TrolleyOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrolleyOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrolleyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
