import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators,FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sottoscrizione',
  templateUrl: './sottoscrizione.component.html',
  styleUrls: ['./sottoscrizione.component.css']
})
export class SottoscrizioneComponent implements OnInit {

  data : any

  constructor(private form : FormBuilder, private location: Location, private router : Router) { 
    // this.data = this.router.getCurrentNavigation()?.extras.state // passare dati tramite Router service
  }

  datiSottoscrizione = this.form.group({
    name: ['',  Validators.minLength(4)],
    surname: ['', Validators.minLength(3)],
    email: ['', Validators.email],
    numberPhone: ['', [ 
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(10),
      Validators.maxLength(10)]],

    address: this.form.group({
      via: ['',Validators.required],
      civico: ['']
    }), //array group
    arrayPrivacy:this.form.array([this.form.control(false),
    this.form.control(false)])}
  )
  ngOnInit(): void {
    this.data = this.location.getState();// passo dati tramite Location 
    
  }
  
  get arrayPrivacy(): FormArray {
    return this.datiSottoscrizione.get('arrayPrivacy') as FormArray;
  }

  onSubmit() {
    if(!this.datiSottoscrizione.valid){
      alert("compilare tutti i campi")
      return;
    }
    console.log(this.datiSottoscrizione.value)
    console.log(this.arrayPrivacy.controls);
    
  }

}
