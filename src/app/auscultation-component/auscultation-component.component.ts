import { ChildService } from './../child.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// declare var $:any;

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

  constructor(fb: FormBuilder, private childService: ChildService) {
    this.form = fb.group({
      // patientId: ['', Validators.required],
      // chiefComplaint: ['', Validators.required],
      // diseases: ['', Validators.required],
      // position: ['', Validators.required],
      // patientReport: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  onFileChange(event) {
    let reader = new FileReader();
    let myFileInput: HTMLInputElement = event.target;
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('image').setValue({
          value: reader.result.split(',')[1]
        })
      };
    }
  }

  clearFile() {
    this.form.get('image').setValue(null);
    this.fileInput.nativeElement.value = '';
    // console.log($("select option:selected").select2('data'));
  }

  formSubmit() {
    this.childService.post(this.form.value).subscribe( response => {
      console.log(response);
    }, error => {
      console.log(error.json());
    });
  }

  ngOnInit() {
    // $("select").select2({
    //   placeholder: 'Please select an option',
    //   allowClear: true,
    //   closeOnSelect: false,
    //   tags: true
    // });
  }

}
