import {Component, OnInit} from '@angular/core';
import {ChargingStationService} from '../../services/charging-station.service';
import {ChargingStation} from "../../modele/charginStation";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-charging-station-list',
  templateUrl: './charging-station-list.component.html',
  standalone: true,
  styleUrls: ['./charging-station-list.component.css'],
  imports: [CommonModule],
  providers: [ChargingStationService],
})
export class ChargingStationListComponent implements OnInit {
  chargingStations: ChargingStation[] = [];

  constructor(private chargingStationService: ChargingStationService) {
  }

  ngOnInit(): void {
    this.chargingStationService.getChargingStations().subscribe(stations => {
      console.log('Stations:', stations);
      this.chargingStations = stations;
    });
  }
}
