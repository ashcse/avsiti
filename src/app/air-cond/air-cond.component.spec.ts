import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirCondComponent } from './air-cond.component';

describe('AirCondComponent', () => {
  let component: AirCondComponent;
  let fixture: ComponentFixture<AirCondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirCondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirCondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
