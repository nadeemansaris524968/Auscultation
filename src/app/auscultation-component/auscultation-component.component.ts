import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-auscultation-component',
  templateUrl: './auscultation-component.component.html',
  styleUrls: ['./auscultation-component.component.css']
})
export class AuscultationComponentComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  @ViewChild('fileInput') fileInput: ElementRef;

  diseases = [
    { id: 1, text: 'Disease 1' },
    { id: 1, text: 'Disease 2' },
    { id: 1, text: 'Disease 3' },
    { id: 1, text: 'Disease 4' },
    { id: 1, text: 'Disease 5' }
  ];

  positions = [
    { id: 1, text: 'Position 1' },
    { id: 1, text: 'Position 2' },
    { id: 1, text: 'Position 3' },
    { id: 1, text: 'Position 4' },
    { id: 1, text: 'Position 5' }
  ];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      patientId: ['', Validators.required],
      chiefComplaint: ['', Validators.required],
      diseases: ['', Validators.required],
      position: ['', Validators.required],
      patientReport: ['', Validators.required],
      recordings: ['', Validators.required]
    });
  }

  onFileChange(event) {
    let reader = new FileReader();
    let myFileInput: HTMLInputElement = event.target;
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('recordings').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      };
    }
  }

  clearFile() {
    this.form.get('recordings').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

  formSubmit() {
    const formModel = this.form.value;
    this.loading = true;
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {
      alert('done!');
      this.loading = false;
    }, 1000);
  }

  ngOnInit() {
  }

}
