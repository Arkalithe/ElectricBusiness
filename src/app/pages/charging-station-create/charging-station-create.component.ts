import { Component, inject } from '@angular/core';
import { ChargingStationService } from '../../services/charging-station/charging-station.service';
import { ChargingStationFormSubmit } from '../../modele/charginStation.modele';
import { ChargingStationFormComponent } from '../../components/charging-station-form/charging-station-form.component';

@Component({
  selector: 'app-charging-station-create',
  standalone: true,
  imports: [ChargingStationFormComponent],
  templateUrl: './charging-station-create.component.html',
  styleUrl: './charging-station-create.component.css',
})
export class ChargingStationCreateComponent {
  private readonly chargingStationService = inject(ChargingStationService);

  handleSubmit(event: ChargingStationFormSubmit): void {
    const { data, files } = event;

    this.chargingStationService
      .createChargingStationWithMedia(data, files)
      .subscribe({
        next: (response) => {
          console.log('Charging station created successfully:', response);
        },
        error: (error) => {
          console.error('Error creating charging station:', error);
        },
      });
  }

  handleCancel(): void {
    console.log('Creation canceled.');
  }
}
