import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrolleysComponent } from './trolleys.component';

describe('TrolleysComponent', () => {
  let component: TrolleysComponent;
  let fixture: ComponentFixture<TrolleysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrolleysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrolleysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
