import { Injectable } from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LovRecord} from '@shared/model/common/lov-record';

@Injectable({
  providedIn: 'root'
})
export class LovService {

  url: string = environment.baseApiUrl + '/lov';
  constructor(private http: HttpClient) {}

  getLov(type:string):Observable<LovRecord[]>{
    const params = new HttpParams()
      .set('type', type);
    return this.http.get<LovRecord[]>(this.url,{params});
  }
}
