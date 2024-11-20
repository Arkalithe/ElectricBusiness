import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingStationUpdateComponent } from './charging-station-update.component';

describe('ChargingStationUpdateComponent', () => {
  let component: ChargingStationUpdateComponent;
  let fixture: ComponentFixture<ChargingStationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargingStationUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargingStationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
