import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingStationDetailsComponent } from './charging-station-details.component';

describe('ChargingStationDetailsComponent', () => {
  let component: ChargingStationDetailsComponent;
  let fixture: ComponentFixture<ChargingStationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargingStationDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargingStationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
