import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sottoscrizione',
  templateUrl: './sottoscrizione.component.html',
  styleUrls: ['./sottoscrizione.component.css']
})
export class SottoscrizioneComponent implements OnInit {

  constructor(private form : FormBuilder) { }

  datiSottoscrizione = this.form.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', Validators.required],
    numberPhone: [''],
    address: this.form.group({
      via: [''],
      civico: ['']
    }),
    privacy: ['', Validators.requiredTrue],
    facoltativePrivacy: ['']
  });

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.datiSottoscrizione.value)
  }

}
