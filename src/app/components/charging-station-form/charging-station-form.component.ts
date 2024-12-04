import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf, NgForOf } from '@angular/common';
import {
  ChargingStation,
  ChargingStationFormSubmit,
} from '../../modele/charginStation.modele';
import { PowerModele } from '../../modele/power.modele';

@Component({
  selector: 'div[app-charging-station-form]',
  standalone: true,
  imports: [NgIf, NgForOf, ReactiveFormsModule],
  templateUrl: './charging-station-form.component.html',
  styleUrl: './charging-station-form.component.css',
})
export class ChargingStationFormComponent implements OnInit {
  @Input() isUpdateMode = false;
  @Input() stationData: ChargingStation | null = null;

  @Output() submitForm = new EventEmitter<{
    data: ChargingStation;
    files: File[];
  }>();
  @Output() cancel = new EventEmitter<void>();
  @Output() imageDeleted = new EventEmitter<string>();

  stationForm: FormGroup;
  addNewLocalisation: boolean = false;
  powerOptions: PowerModele[] = [];
  selectedFiles: File[] = [];
  private readonly fb = inject(FormBuilder);

  ngOnInit(): void {
    this.fetchPowerOptions();
    this.initializeForm();

    if (this.stationData) {
      this.patchFormValues(this.stationData);
    }
  }

  private initializeForm(): void {
    this.stationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      hourlyRate: [0, [Validators.required, Validators.min(0)]],
      accessDirectives: ['', Validators.required],
      onFoot: [false, Validators.required],
      localisationId: [null],
      mediaList: this.fb.group({
        id: [null],
        path: [null],
        chargingStationId: [null],
        url: [null],
      }),
      powerId: [null, Validators.required],
    });

    if (this.isUpdateMode) {
      this.stationForm.removeControl('localisationId');
    }
  }

  private patchFormValues(data: ChargingStation): void {
    this.stationForm.patchValue({
      name: data.name,
      hourlyRate: data.baseHourlyRate || data.hourlyRate,
      accessDirectives: data.accessDirectives,
      onFoot: data.onFoot,
      localisationId: data.localisation?.id || null,
      powerId: data.power?.id || null,
    });

    if (data.localisation) {
      this.stationForm.get('localisation')?.patchValue({
        streetNumber: data.localisation.streetNumber,
        streetName: data.localisation.streetName,
        latitude: data.localisation.latitude,
        longitude: data.localisation.longitude,
        zipCode: data.localisation.zipCode,
        city: data.localisation.city,
      });
      this.addNewLocalisation = true;
      this.toggleLocalisationEntry();
    }
  }
  // localisation: this.fb.group({
  //                               streetNumber: ['', Validators.required],
  //                               streetName: ['', Validators.required],
  //                               latitude: ['', Validators.required],
  //                               longitude: ['', Validators.required],
  //                               zipCode: ['', Validators.required],
  //                               city: ['', Validators.required],
  //                             }),
  toggleLocalisationEntry(): void {
    this.addNewLocalisation = !this.addNewLocalisation;
    const localisationGroup = this.fb.group({
      streetNumber: ['', Validators.required],
      streetName: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
    });

    if (this.addNewLocalisation) {
      this.stationForm.addControl('localisation', localisationGroup);
      this.stationForm.get('localisationId')?.disable();
    } else {
      this.stationForm.get('localisationId')?.enable();
      this.stationForm.removeControl('localisation');
    }
  }

  deleteImage(mediaId: string): void {
    this.imageDeleted.emit(mediaId);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = Array.from(input.files);
    }
  }

  onSubmit(): void {
    if (this.stationForm.valid) {
      const formData = { ...this.stationForm.value };

      if (this.addNewLocalisation) {
        delete formData.localisationId;
      } else {
        delete formData.localisation;
      }

      this.submitForm.emit({ data: formData, files: this.selectedFiles });
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }

  private fetchPowerOptions(): void {
    this.powerOptions = [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
      { id: 3, value: 50 },
    ];
  }

  currentStep = 1;

  goToStep(step: number): void {
    this.currentStep = step;
  }
}
