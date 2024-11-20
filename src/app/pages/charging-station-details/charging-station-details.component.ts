import { Component, inject, Input, OnInit } from '@angular/core';
import { ChargingStation } from '../../modele/charginStation.modele';
import { ChargingStationService } from '../../services/charging-station/charging-station.service';

@Component({
  selector: 'app-charging-station-details',
  standalone: true,
  imports: [],
  templateUrl: './charging-station-details.component.html',
  styleUrl: './charging-station-details.component.css',
})
export class ChargingStationDetailsComponent implements OnInit {
  @Input() id: string;
  chargingStations: ChargingStation;
  private readonly chargingStationService = inject(ChargingStationService);

  ngOnInit(): void {
    this.chargingStationService.getChargingStationById(this.id).subscribe({
      next: (data: ChargingStation) => {
        this.chargingStations = data;
      },
      error: (err) => console.error(err),
    });
  }
}
