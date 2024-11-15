import {Component, EventEmitter, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-single-file-upload',
  standalone: true,
  imports: [],
  templateUrl: './single-file-upload.component.html',
  styleUrl: './single-file-upload.component.css'
})
export class SingleFileUploadComponent {
  @Output() fileUploaded = new EventEmitter<File>();
  status: "initial" | "telechargement" | "succes" | "rate" = "initial";
  file: File | null = null;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }


  onChange(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.status = "initial";
      this.file = file;
    }
  }

  onUpload() {
    if (this.file) {
      this.status = "telechargement";
      console.log("Uploading file:", this.file);
      this.fileUploaded.emit(this.file);
      this.status = "succes";
    }
  }
}
