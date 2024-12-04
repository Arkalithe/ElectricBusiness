import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingStationOwnerList } from './charging-station-owner-list';

describe('ProfileHistoryComponent', () => {
  let component: ChargingStationOwnerList;
  let fixture: ComponentFixture<ChargingStationOwnerList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargingStationOwnerList],
    }).compileComponents();

    fixture = TestBed.createComponent(ChargingStationOwnerList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
