import { Component, HostBinding, OnInit } from '@angular/core';
import { ChargingStation } from '../../modele/charginStation';
import { AuthService } from '../../services/auth/auth.service';
import { ChargingStationService } from '../../services/charging-station.service';

import { CommonModule } from '@angular/common';
// import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-charging-station-list-all',
  standalone: true,
  imports: [CommonModule],
  providers: [ChargingStationService],
  templateUrl: './charging-station-list-all.component.html',
  styleUrl: './charging-station-list-all.component.css',
})
export class ChargingStationListAllComponent implements OnInit {
  chargingStations: ChargingStation[] = [];
  @HostBinding('class.grid-auto') autoGridClass = true;

  constructor(
    private authService: AuthService,
    private chargingStationService: ChargingStationService,
  ) {}

  ngOnInit(): void {
    this.chargingStationService.getChargingStationsBis().subscribe({
      next: (data: ChargingStation[]) => {
        this.chargingStations = data;
        console.log('Données assignées au composant:', this.chargingStations);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des données:', error);
      },
      complete: () => {
        console.log('Récupération des données terminée');
      },
    });
  }
}
