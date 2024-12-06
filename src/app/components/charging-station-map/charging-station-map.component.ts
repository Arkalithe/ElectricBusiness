import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { ChargingStation } from '../../modele/charginStation.modele';
import { ChargingStationService } from '../../services/charging-station/charging-station.service';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { NgForOf } from '@angular/common';
import { GoogleMapsLoaderService } from '../../services/google-map-loader/google-map-loader-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-charging-station-map',
  standalone: true,
  imports: [GoogleMap, GoogleMapsModule, NgForOf, FormsModule],
  templateUrl: './charging-station-map.component.html',
  styleUrls: ['./charging-station-map.component.css'],
})
export class ChargingStationMapComponent implements OnInit {
  chargingStations: ChargingStation[] = [];
  filteredStations: ChargingStation[] = [];
  center: google.maps.LatLngLiteral = { lat: 48.8566, lng: 2.3522 };
  zoom = 12;
  searchQuery: string = '';
  private chargingStationService = inject(ChargingStationService);
  private googleMapsLoader = inject(GoogleMapsLoaderService);
  map!: google.maps.Map;
  markers: google.maps.Marker[] = [];
  @HostBinding('class.grid-auto') grid = true;

  ngOnInit(): void {
    this.googleMapsLoader
      .load()
      .then(() => {
        this.initializeMap();
      })
      .catch((error) => {
        console.error('Failed to load Google Maps API:', error);
      });
  }

  initializeMap(): void {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: this.center,
      zoom: this.zoom,
    });

    this.loadChargingStations();
  }

  loadChargingStations(): void {
    this.chargingStationService.getChargingStations().subscribe((stations) => {
      this.chargingStations = stations;
      this.filteredStations = stations;
      this.updateMarkers();
    });
  }

  updateMarkers(): void {
    this.markers.forEach((marker) => marker.setMap(null));
    this.markers = [];

    this.filteredStations.forEach((station) => {
      if (station.localisation?.latitude && station.localisation.longitude) {
        const position: google.maps.LatLngLiteral = {
          lat: parseFloat(station.localisation.latitude),
          lng: parseFloat(station.localisation.longitude),
        };

        const marker = new google.maps.Marker({
          position,
          map: this.map,
          title: station.name,
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div>
              <strong>${station.name}</strong><br>
              ${station.localisation.streetNumber || ''} ${
                station.localisation.streetName || ''
              }<br>
              ${station.localisation.city}<br>
              Power: ${station.power?.value || 'N/A'} kW<br>
              Access: ${station.accessDirectives || 'N/A'}
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(this.map, marker);
        });

        this.markers.push(marker);
      }
    });
  }

  onSearch(query: string): void {
    this.searchQuery = query;
    const lowerCaseQuery = query.toLowerCase();

    this.filteredStations = this.chargingStations.filter((station) => {
      const addressString = [
        station.localisation.city,
        station.localisation.streetName,
        station.localisation.streetNumber,
      ]
        .join(' ')
        .toLowerCase();
      return addressString.includes(lowerCaseQuery);
    });

    this.updateMarkers();
  }
}
