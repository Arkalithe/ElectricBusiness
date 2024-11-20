import { Component, inject, Input, OnInit } from '@angular/core';
import { ChargingStationService } from '../../services/charging-station/charging-station.service';
import {
  ChargingStation,
  ChargingStationFormSubmit,
} from '../../modele/charginStation.modele';
import { ChargingStationFormComponent } from '../../components/charging-station-form/charging-station-form.component';
import { MediaService } from '../../services/media/media.service';
import { MediaModele } from '../../modele/media.modele';

class Media {}

@Component({
  selector: 'app-charging-station-update',
  standalone: true,
  imports: [ChargingStationFormComponent],
  templateUrl: './charging-station-update.component.html',
  styleUrl: './charging-station-update.component.css',
})
export class ChargingStationUpdateComponent implements OnInit {
  private readonly mediaService = inject(MediaService);
  private readonly chargingStationService = inject(ChargingStationService);

  @Input() id: string;
  stationData: ChargingStation | null = null;
  mediaList: MediaModele[] = [];
  loading = false;

  ngOnInit(): void {
    this.loading = true;
    this.chargingStationService.getChargingStationById(this.id).subscribe({
      next: (station) => {
        console.log(station);
        this.stationData = station;
        this.mediaList = station.mediaList || [];
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching charging station:', error);
        this.loading = false;
      },
    });
  }

  handleSubmit(event: ChargingStationFormSubmit): void {
    const { data } = event;

    this.chargingStationService.updateChargingStation(this.id, data).subscribe({
      next: (response) => {
        console.log('Charging station updated successfully:', response);
      },
      error: (error) => {
        console.error('Error updating charging station:', error);
      },
    });
  }

  handleCancel(): void {
    console.log('Update canceled.');
  }

  handleImageUpload(file: File): void {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('chargingStationId', this.id);
    formData.append('extension', file.name.split('.').pop()!);

    this.mediaService.createMedia(formData).subscribe({
      next: (media) => {
        this.mediaList.push(media);
        console.log('Image uploaded successfully:', media);
      },
      error: (error) => {
        console.error('Error uploading image:', error);
      },
    });
  }

  handleImageDelete(mediaId: string): void {
    this.mediaService.deleteMedia(mediaId).subscribe({
      next: () => {
        this.mediaList = this.mediaList.filter((media) => media.id !== mediaId);
        console.log('Image deleted successfully');
      },
      error: (error) => {
        console.error('Error deleting image:', error);
      },
    });
  }
}
