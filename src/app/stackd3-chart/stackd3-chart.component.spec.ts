import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stackd3ChartComponent } from './stackd3-chart.component';

describe('Stackd3ChartComponent', () => {
  let component: Stackd3ChartComponent;
  let fixture: ComponentFixture<Stackd3ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stackd3ChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stackd3ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
