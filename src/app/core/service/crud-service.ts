import {Observable} from 'rxjs';
import {ApiResponse} from '@core/model/api-response';
import {Pagable} from '@core/model/pagable';


export interface CrudService<O,I> {
  findById(id:I) : Observable<ApiResponse>;
  insert(object:O) : Observable<ApiResponse>;
  update(object:O) : Observable<ApiResponse>;
  delete(object:O) : void;
  getAllCount():Observable<ApiResponse>;
  getPage(page: Pagable): Observable<ApiResponse>;
  getAll(): Observable<ApiResponse>;
}
