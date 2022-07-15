import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) {

  }

 configUrl = 'https://digimon-api.vercel.app/api/digimon';

 getConfig() {
   return this.http.get<any>(this.configUrl)
 }
}
