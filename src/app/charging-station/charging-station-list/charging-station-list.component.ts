import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {ChargingStationService} from '../../services/charging-station.service';
import {CommonModule} from "@angular/common";
import {USER_STATION} from "../../mockUp/mock-up";
import {User} from "../../modele/user";
import {ChargingStation} from "../../modele/charginStation";

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

  constructor(
    private authService: AuthService,
    private chargingStationService: ChargingStationService
  ) {
  }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      if (user) {
        this.getStationsForUser(user);
      }
    });
  }

  getStationsForUser(user: User): void {
    const userStations = USER_STATION
      .filter(userStation => userStation.user.uuid === user.uuid)
      .map(userStation => userStation.station);

    this.chargingStations = Array.from(new Set([...userStations]));
  }
}
