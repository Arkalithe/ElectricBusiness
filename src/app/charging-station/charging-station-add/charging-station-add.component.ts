import { Component } from '@angular/core';
import { ChargingStationService } from '../../services/charging-station.service';
import { FormGroup, FormBuilder, FormsModule } from '@angular/forms';
import { ChargingStation } from '../../modele/charginStation';
import { Localisation } from '../../modele/localisation';
import { Media } from '../../modele/media';

@Component({
  selector: 'app-charging-station-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './charging-station-add.component.html',
  styleUrls: ['./charging-station-add.component.css'],
})
export class ChargingStationAddComponent {
  chargingStationForm: FormGroup;
  uuid: string = this.generateUUID();
  name: string = '';
  availability: boolean = true;
  pricePerHour: number = 0;
  created: Date = new Date();
  medias: Media[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private chargingStationService: ChargingStationService,
  ) {
    this.chargingStationForm = this.formBuilder.group(
      new ChargingStation(
        this.uuid,
        this.name,
        new Localisation('', '', 0),
        '',
        this.availability,
        this.pricePerHour,
        this.created,
      ),
    );
  }

  onSubmit(): void {
    this.created = new Date();
    this.uuid = this.generateUUID();
    this.chargingStationForm.value.created = this.created;
    this.chargingStationForm.value.uuid = this.uuid;
    this.chargingStationForm.value.medias = this.medias;

    console.log('Form Value:', this.chargingStationForm.value);
    this.chargingStationService.addChargingStation(
      this.chargingStationForm.value,
    );
    this.chargingStationForm.reset();
  }

  generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (char) {
        var randome = (Math.random() * 16) | 0,
          value = char === 'x' ? randome : (randome & 0x3) | 0x8;
        return value.toString(16);
      },
    );
  }
}
