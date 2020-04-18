import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatepolicyComponent } from './privatepolicy.component';

describe('PrivatepolicyComponent', () => {
  let component: PrivatepolicyComponent;
  let fixture: ComponentFixture<PrivatepolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatepolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatepolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
