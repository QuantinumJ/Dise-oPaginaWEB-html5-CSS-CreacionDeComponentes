import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeShopComponent } from './bike-shop.component';

describe('BikeShopComponent', () => {
  let component: BikeShopComponent;
  let fixture: ComponentFixture<BikeShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
