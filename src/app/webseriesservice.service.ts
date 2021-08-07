import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSer } from './web-ser';

@Injectable({
  providedIn: 'root'
})
export class WebseriesserviceService {
private baseURL="http://localhost:8081/series";

  constructor(private httpClient: HttpClient) { }

getWebSeriesList():Observable<WebSer[]>{

  return this.httpClient.get<WebSer[]>(`${this.baseURL}`);

}

}
