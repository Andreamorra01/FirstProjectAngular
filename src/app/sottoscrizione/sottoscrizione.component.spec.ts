import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SottoscrizioneComponent } from './sottoscrizione.component';

describe('SottoscrizioneComponent', () => {
  let component: SottoscrizioneComponent;
  let fixture: ComponentFixture<SottoscrizioneComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SottoscrizioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SottoscrizioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
