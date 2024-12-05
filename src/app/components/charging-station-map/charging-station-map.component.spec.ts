import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingStationMapComponent } from './charging-station-map.component';

describe('ChargingStationMapComponent', () => {
  let component: ChargingStationMapComponent;
  let fixture: ComponentFixture<ChargingStationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargingStationMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargingStationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
