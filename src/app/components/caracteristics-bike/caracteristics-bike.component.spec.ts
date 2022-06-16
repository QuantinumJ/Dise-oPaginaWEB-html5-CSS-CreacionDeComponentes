import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicsBikeComponent } from './caracteristics-bike.component';

describe('CaracteristicsBikeComponent', () => {
  let component: CaracteristicsBikeComponent;
  let fixture: ComponentFixture<CaracteristicsBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicsBikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicsBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
