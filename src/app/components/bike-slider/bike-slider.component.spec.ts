import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeSliderComponent } from './bike-slider.component';

describe('BikeSliderComponent', () => {
  let component: BikeSliderComponent;
  let fixture: ComponentFixture<BikeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
