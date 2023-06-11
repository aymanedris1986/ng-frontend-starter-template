import { Injectable } from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponse} from '@core/model/api-response';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {
  url: string = environment.baseApiUrl + '/dash-board';
  constructor(private httpClient:HttpClient) { }

  public dashboardNumbers():Observable<ApiResponse>{
    return this.httpClient.get<ApiResponse>(this.url+'/numbers');
  }
}
