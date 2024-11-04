import { Component } from '@angular/core';
import { ChargingStationService } from '../../services/charging-station.service';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';
import { SingleFileUploadComponent } from "../../single-file-upload/single-file-upload.component";

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

  constructor(
    private formBuilder: FormBuilder,
    private chargingStationService: ChargingStationService,
  ) {
    this.chargingStationForm = this.formBuilder.group({
      uuid: [this.generateUUID()],
      name: [''],
      availability: [true],
      pricePerHour: [0],
      created: [new Date()],
      localisation: this.formBuilder.group({
        streetNumber: [''],
        streetName: [''],
        latitude: [''],
        longitude: [''],
        zipCode: [''],
        city: [''],
        owner: this.formBuilder.group({
          id: [''],
          email: [''],
          password: [''],
          lastname: [''],
          firstname: [''],
          phone: [''],
          roles: ['USER'],
          birthedAt: [new Date()],
          createdAt: [new Date()],
          username: [''],
          enabled: [true],
          accountNonLocked: [true],
          credentialsNonExpired: [true],
          accountNonExpired: [true],
        })
      }),
      medias: this.formBuilder.array([]),
    });
  }


  // onSubmit(): void {
  //   const formValue = this.chargingStationForm.value;
  //
  //   formValue.created = new Date();
  //   formValue.uuid = this.generateUUID();
  //
  //   console.log('Valeur du Formulaire:', formValue);
  //   this.chargingStationService.addChargingStation(formValue).subscribe(() => {
  //     this.chargingStationForm.reset();
  //   });
  // }


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
    const mediasControl = this.chargingStationForm.get('medias') as FormArray;
    const fileControl = new FormControl(file);
    mediasControl.push(fileControl);
    mediasControl.markAsDirty();
    mediasControl.updateValueAndValidity();
  }
}
