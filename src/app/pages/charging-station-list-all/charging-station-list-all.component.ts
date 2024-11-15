import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { ChargingStation } from '../../modele/charginStation.modele';
import { ChargingStationService } from '../../services/charging-station.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-charging-station-list-all',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  providers: [ChargingStationService],
  templateUrl: './charging-station-list-all.component.html',
  styleUrl: './charging-station-list-all.component.css',
})
export class ChargingStationListAllComponent implements OnInit {
  @HostBinding('class.grid-auto') autoGridClass = true;
  chargingStations: ChargingStation[] = [];
  private readonly chargingStationService = inject(ChargingStationService);

  ngOnInit(): void {
    this.chargingStationService.getChargingStations().subscribe({
      next: (data: ChargingStation[]) => {
        this.chargingStations = data;
        console.log(this.chargingStations);
      },
      error: (error) => {},
      complete: () => {},
    });
  }
}
