import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';

import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageLink:any[] = []

  constructor(private digimon: FetchDataService, private router : Router) { }

  ngOnInit(): void {
    this.showConfig()
  }

  showConfig() {
    this.digimon.getConfig()
      .subscribe((res: any) => {
        this.imageLink = res.slice(0,10);
        // console.log(res);
        console.log(this.imageLink);
        

      });
  }
  goToDetail(el:any){
    console.log(el)
    

  }

}
