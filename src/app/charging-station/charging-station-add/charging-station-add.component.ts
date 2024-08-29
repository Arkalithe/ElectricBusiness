import {Component} from '@angular/core';
import {ChargingStationService} from '../../services/charging-station.service';
import {FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, FormArray, FormControl} from '@angular/forms';
import {Localisation} from '../../modele/localisation';
import {Media} from '../../modele/media';
import {SingleFileUploadComponent} from "../../single-file-upload/single-file-upload.component";

@Component({
  selector: 'app-charging-station-add',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SingleFileUploadComponent
  ],
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
    this.chargingStationForm = this.formBuilder.group({
      uuid: this.generateUUID(),
      name: '',
      localisation: this.formBuilder.group(new Localisation('', '', 0)),
      availability: true,
      pricePerHour: 0,
      created: new Date(),
      medias: this.formBuilder.array([]),
    });
  }

  onSubmit(): void {
    const formValue = this.chargingStationForm.value;
    formValue.created = new Date();
    formValue.uuid = this.generateUUID();

    console.log('Valeur du Formulaire:', formValue);
    this.chargingStationService.addChargingStation(formValue);
    this.chargingStationForm.reset();
  }

  generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (char) {
        let randome = (Math.random() * 16) | 0,
          value = char === 'x' ? randome : (randome & 0x3) | 0x8;
        return value.toString(16);
      },
    );
  }

  onFileUploaded(file: File) {
    const mediasControl = this.chargingStationForm.get('medias');
    if (mediasControl && mediasControl instanceof FormArray) {
      const fileControl = new FormControl(file);
      mediasControl.push(fileControl);
      mediasControl.markAsDirty();
      mediasControl.updateValueAndValidity();
    }
  }
}
