import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayQueryComponent } from './day-query.component';

describe('DayQueryComponent', () => {
  let component: DayQueryComponent;
  let fixture: ComponentFixture<DayQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
