import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SottoscrizioneComponent } from './sottoscrizione/sottoscrizione.component';

const routes: Routes = [
  { 
    component: HomeComponent,
    path:''
  },
  { 
    component: SottoscrizioneComponent,
    path: 'subscribe/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
