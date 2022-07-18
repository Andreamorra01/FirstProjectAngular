import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sottoscrizione',
  templateUrl: './sottoscrizione.component.html',
  styleUrls: ['./sottoscrizione.component.css']
})
export class SottoscrizioneComponent implements OnInit {

  data : any

  constructor(private form : FormBuilder, private location: Location, private router : Router) { 
    this.data = this.router.getCurrentNavigation()?.extras.state
  }

  datiSottoscrizione = this.form.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', Validators.required],
    numberPhone: [''],
    address: this.form.group({
      via: [''],
      civico: ['']
    }), //array group
    privacy: ['', Validators.requiredTrue],
    facoltativePrivacy: ['']
  });

  ngOnInit(): void {
    // this.data = this.location.getState();
    
  }

  onSubmit() {
    console.log(this.datiSottoscrizione.value)
  }

}
