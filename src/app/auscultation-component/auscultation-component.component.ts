import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auscultation-component',
  templateUrl: './auscultation-component.component.html',
  styleUrls: ['./auscultation-component.component.css']
})
export class AuscultationComponentComponent implements OnInit {
  form: FormGroup;
  diseases = [
    { id: 1, text: 'Disease 1'},
    { id: 1, text: 'Disease 2'},
    { id: 1, text: 'Disease 3'},
    { id: 1, text: 'Disease 4'},
    { id: 1, text: 'Disease 5'}
  ];

  positions = [
    { id: 1, text: 'Position 1'},
    { id: 1, text: 'Position 2'},
    { id: 1, text: 'Position 3'},
    { id: 1, text: 'Position 4'},
    { id: 1, text: 'Position 5'}
  ];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      patientId: ['', Validators.required],
      chiefComplaint: ['', Validators.required],
      diseases: ['', Validators.required],
      position: ['', Validators.required],
      patientReport: ['', Validators.required],
      recording: ['', Validators.required]
    });
  }

  formSubmit() {
    
  }

  ngOnInit() {
  }

}
