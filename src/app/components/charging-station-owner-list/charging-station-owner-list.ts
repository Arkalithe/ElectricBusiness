import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { ChargingStation } from '../../modele/charginStation.modele';
import { ChargingStationService } from '../../services/charging-station/charging-station.service';
import { CurrencyPipe, NgForOf, NgIf } from '@angular/common';
import { Page } from '../../modele/page.modele';
import { Router } from '@angular/router';

@Component({
  selector: 'div[app-charging-station-owner-list]',
  standalone: true,
  imports: [CurrencyPipe, NgForOf, NgIf],
  templateUrl: './charging-station-owner-list.html',
  styleUrl: './charging-station-owner-list.css',
})
export class ChargingStationOwnerList implements OnInit {
  chargingStations: ChargingStation[] = [];
  currentPage = 0;
  pageSize = 10;
  totalPages = 0;
  totalElements = 0;
  showModal = false;
  stationToDelete: ChargingStation | null = null;
  private readonly chargingStationService = inject(ChargingStationService);
  private readonly router = inject(Router);
  @HostBinding('class.grid-auto') gridAuto = true;

  ngOnInit() {
    this.loadChargingStationsOwner();
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

  trackById(index: number, station: ChargingStation): string {
    return station.id;
  }

  confirmDelete(station: ChargingStation): void {
    this.showModal = true;
    this.stationToDelete = station;
  }

  deleteStation(): void {
    if (this.stationToDelete) {
      this.chargingStationService
        .deleteChargingStation(this.stationToDelete.id)
        .subscribe({
          next: () => {
            this.chargingStations = this.chargingStations.filter(
              (station) => station.id !== this.stationToDelete?.id,
            );
            this.showModal = false;
            this.stationToDelete = null;
          },
          error: (err) => {
            console.error('Error deleting charging station:', err);
          },
        });
    }
  }

  goToDetails(stationId: string): void {
    this.router.navigate([`/stations/details/${stationId}`]);
  }

  closeModal(): void {
    this.showModal = false;
    this.stationToDelete = null;
  }
}
