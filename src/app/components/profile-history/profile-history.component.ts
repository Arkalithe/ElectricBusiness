import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { ChargingStation } from '../../modele/charginStation.modele';
import { ChargingStationService } from '../../services/charging-station/charging-station.service';
import { CurrencyPipe, NgForOf, NgIf } from '@angular/common';
import { Page } from '../../modele/page.modele';

@Component({
  selector: 'div[app-profile-history]',
  standalone: true,
  imports: [CurrencyPipe, NgForOf, NgIf],
  templateUrl: './profile-history.component.html',
  styleUrl: './profile-history.component.css',
})
export class ProfileHistoryComponent implements OnInit {
  chargingStations: ChargingStation[] = [];
  currentPage = 0;
  pageSize = 5;
  totalPages = 0;
  totalElements = 0;
  showModal = false;
  stationToDelete: ChargingStation | null = null;
  private readonly chargingStationService = inject(ChargingStationService);
  @HostBinding('class.grid-auto') gridAuto = true;

  ngOnInit() {
    this.loadChargingStationsOwner();
  }

  loadChargingStationsOwner(page: number = this.currentPage): void {
    this.chargingStationService
      .getChargingStationsByOwner(page, this.pageSize)
      .subscribe({
        next: (data: Page<ChargingStation>) => {
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
            this.showModal = false; // Close the modal
            this.stationToDelete = null; // Reset
          },
          error: (err) => {
            console.error('Error deleting charging station:', err);
          },
        });
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.stationToDelete = null;
  }
}
