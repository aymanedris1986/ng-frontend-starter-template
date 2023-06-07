import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CrudService} from '@core/service/crud-service';
import {Observable} from 'rxjs';
import {ApiResponse} from '@core/model/api-response';
import {Pagable} from '@core/model/pagable';

@Injectable({
  providedIn: 'root'
})
export abstract class CrudImplService<O,I> implements CrudService<O,I>{

  http:HttpClient = inject(HttpClient);

  delete(object: O): void {
  }

  findById(id: I): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.getServiceUrl() + '/' + id);
  }

  getAll(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.getServiceUrl());
  }

  getAllCount(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.getServiceUrl() + '/count');
  }

  getPage(page: Pagable): Observable<ApiResponse> {
    const params = new HttpParams()
      .set('page', page.page.toString())
      .set('size', page.size.toString());
    return this.http.get<ApiResponse>(this.getServiceUrl(), {params});
  }

  insert(object: O): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.getServiceUrl(), object);
  }

  update(object: O): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.getServiceUrl(), object);
  }

  abstract getServiceUrl():string;
}
