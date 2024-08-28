import {Component} from '@angular/core';
import {ChargingStationService} from '../../services/charging-station.service';
import {FormGroup, FormBuilder, FormsModule} from '@angular/forms';
import {ChargingStation} from "../../modele/charginStation";
import {Localisation} from "../../modele/localisation";
import {Media} from "../../modele/media";
import {Review} from "../../modele/review";
import {Favorite} from "../../modele/favorite";

@Component({
  selector: 'app-charging-station-add',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './charging-station-add.component.html',
  styleUrl: './charging-station-add.component.css'
})
export class ChargingStationAddComponent {
  chargingStationForm: FormGroup;
  uuid: string = "";
  name: string = "";
  availability: boolean = true;
  pricePerHour: number = 0;
  created: Date = new Date();
  medias: Media[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private chargingStationService: ChargingStationService
  ) {
    this.chargingStationForm = this.formBuilder.group(
      new ChargingStation("", "",
        new Localisation('', '', 0),
        "", true, 0, new Date()));

  }

  onSubmit(): void {
    console.log('Form Value:', this.chargingStationForm.value);
    this.chargingStationService.addChargingStation(this.chargingStationForm.value);
    this.chargingStationForm.reset();
  }
}
