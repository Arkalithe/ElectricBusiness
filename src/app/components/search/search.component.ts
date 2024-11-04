import { Component, HostBinding, OnInit } from '@angular/core';
import { ChargingStationService } from '../../services/charging-station.service';
import { ChargingStation } from '../../modele/charginStation';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl('');
  allChargingStation: ChargingStation[] = [];
  filteredChargingStation: ChargingStation[] = [];
  showDropdown = false;
  @HostBinding('class.grid-main') autoGridClass = true;

  constructor(
    private chargingStationService: ChargingStationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.chargingStationService
      .getChargingStationsBis()
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
