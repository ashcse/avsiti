import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgdcaComponent } from './pgdca.component';

describe('PgdcaComponent', () => {
  let component: PgdcaComponent;
  let fixture: ComponentFixture<PgdcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgdcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgdcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
