import { Component, OnInit } from '@angular/core';
import { ChargingStationService } from '../../services/charging-station.service';
import {ChargingStation} from "../../modele/charginStation";

@Component({
  selector: 'app-charging-station-list',
  templateUrl: './charging-station-list.component.html',
  standalone: true,
  styleUrls: ['./charging-station-list.component.css']
})
export class ChargingStationListComponent implements OnInit {
  chargingStations: ChargingStation[] = [];

  constructor(private chargingStationService: ChargingStationService) { }

  ngOnInit(): void {
    this.chargingStationService.getChargingStations().subscribe(stations => {
      this.chargingStations = stations;
    });
  }
}
