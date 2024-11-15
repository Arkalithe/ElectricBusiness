import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { ChargingStation } from '../../modele/charginStation.modele';
import { ChargingStationService } from '../../services/charging-station.service';
import { CurrencyPipe, DatePipe, NgForOf } from '@angular/common';
import { Page } from '../../modele/page.modele';

@Component({
  selector: 'div[app-profile-history]',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, NgForOf],
  templateUrl: './profile-history.component.html',
  styleUrl: './profile-history.component.css',
})
export class ProfileHistoryComponent implements OnInit {
  chargingStations: ChargingStation[] = [];
  currentPage = 0;
  pageSize = 5;
  totalPages = 0;
  totalElements = 0;
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
}
