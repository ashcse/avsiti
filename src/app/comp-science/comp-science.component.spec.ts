import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompScienceComponent } from './comp-science.component';

describe('CompScienceComponent', () => {
  let component: CompScienceComponent;
  let fixture: ComponentFixture<CompScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
