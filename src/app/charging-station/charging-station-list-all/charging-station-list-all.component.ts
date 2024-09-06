import {Component, OnInit} from '@angular/core';
import {ChargingStation} from "../../modele/charginStation";
import {AuthService} from "../../services/auth/auth.service";
import {ChargingStationService} from "../../services/charging-station.service";
import {User} from "../../modele/user";
import {USER_STATION} from "../../mockUp/mock-up";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-charging-station-list-all',
  standalone: true,
  imports: [CommonModule],
  providers: [ChargingStationService],
  templateUrl: './charging-station-list-all.component.html',
  styleUrl: './charging-station-list-all.component.css'
})
export class ChargingStationListAllComponent implements OnInit {
  chargingStations: ChargingStation[] = [];



  constructor(
    private authService: AuthService,
    private chargingStationService: ChargingStationService
  ) {
  }

  ngOnInit(): void {
    this.chargingStationService
      .getChargingStations().
    subscribe((chargingStations: ChargingStation[]) => (this.chargingStations = chargingStations));
  }


}
