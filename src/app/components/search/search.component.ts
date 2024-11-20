import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { ChargingStationService } from '../../services/charging-station/charging-station.service';
import { ChargingStation } from '../../modele/charginStation.modele';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'div[app-search]',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf, NgIf],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @HostBinding('class.text-center') textCenter = true;
  private chargingStationService = inject(ChargingStationService);
  private readonly router = inject(Router);
  searchControl = new FormControl('');
  filteredChargingStation: ChargingStation[] = [];
  showDropdown = false;

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((query) =>
          this.chargingStationService.getChargingStationBySearch(query),
        ),
      )
      .subscribe((stations) => {
        this.filteredChargingStation = stations;
        console.log(this.filteredChargingStation);
        this.showDropdown = stations.length > 0;
      });
  }

  selectStation(station: ChargingStation): void {
    this.searchControl.setValue(station.localisation.streetName, {
      emitEvent: false,
    });
    this.showDropdown = false;
    this.goToStationsDetails(station.id);
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
    this.router.navigate([`/stations/details/${stationId}`]);
  }

  trackById(index: number, station: ChargingStation): number {
    return station.localisation.id;
  }
}
