import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { ChargingStation } from '../../modele/charginStation.modele';
import { ChargingStationService } from '../../services/charging-station/charging-station.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Page } from '../../modele/page.modele';

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
  currentPage = 0;
  pageSize = 10;
  totalPages = 0;
  totalElements = 0;

  ngOnInit(): void {
    this.loadChargingStationsOwner();
    // this.chargingStationService.getChargingStationsByOwner().subscribe({
    //   next: (data: ChargingStation[]) => {
    //     this.chargingStations = data;
    //     console.log(this.chargingStations);
    //   },
    //   error: (error) => {},
    //   complete: () => {},
    // });
  }

  loadChargingStationsOwner(page: number = this.currentPage): void {
    this.chargingStationService
      .getChargingStationsByOwner(page, this.pageSize)
      .subscribe({
        next: (data: Page<ChargingStation>) => {
          console.log(data);
          this.chargingStations = data.content;
          this.totalPages = data.totalPages;
          this.totalElements = data.totalElements;
          this.currentPage = data.number;
        },
        error: (err) => {
          console.error('Error fetching charging stations:', err);
        },
      });
  }

  onPageChange(newPage: number): void {
    if (newPage >= 0 && newPage < this.totalPages) {
      this.currentPage = newPage;
      this.loadChargingStationsOwner(newPage);
    }
  }
}
