import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sottoscrizione',
  templateUrl: './sottoscrizione.component.html',
  styleUrls: ['./sottoscrizione.component.css']
})
export class SottoscrizioneComponent implements OnInit {

  data : any

  constructor(private form : FormBuilder, private router : ActivatedRoute) { }

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
    console.log(this.router.snapshot.params)
    this.data = this.router.snapshot.params['id']
  }

  onSubmit() {
    console.log(this.datiSottoscrizione.value)
  }

}
