import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { ChargingStationService } from '../../services/charging-station.service';
import { ChargingStation } from '../../modele/charginStation.modele';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'div[app-search]',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  @HostBinding('class.text-center') textCenter = true;
  private chargingStationService = inject(ChargingStationService);
  private readonly router = inject(Router);
  searchControl = new FormControl('');
  allChargingStation: ChargingStation[] = [];
  filteredChargingStation: ChargingStation[] = [];
  showDropdown = false;

  ngOnInit(): void {
    this.chargingStationService
      .getChargingStations()
      .subscribe((chargingStations) => {
        this.allChargingStation = chargingStations;

        this.searchControl.valueChanges
          .pipe(
            debounceTime(300),
            distinctUntilChanged(),
            startWith(''),
            map((searchTerm) => this.filterChargingStation(searchTerm ?? '')),
          )
          .subscribe((filtered) => {
            this.filteredChargingStation = filtered;
          });
      });
  }

  filterChargingStation(searchTerm: string): ChargingStation[] {
    if (!searchTerm) {
      return [];
    }
    return this.allChargingStation.filter((station) =>
      station.localisation.streetName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    );
  }

  selectStation(station: ChargingStation): void {
    this.searchControl.setValue(station.localisation.streetName, {
      emitEvent: false,
    });
    this.showDropdown = false;
    this.goToStationsDetails(station.uuid);
  }

  hideDropdown(): void {
    setTimeout(() => (this.showDropdown = false), 200);
  }

  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.showDropdown = false;
    }
  }

  goToStationsDetails(stationId: string): void {
    this.router.navigate([`/stations/${stationId}/details`]);
  }
}
