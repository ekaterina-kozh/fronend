import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  baseurl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCategory(): Observable<any> {
    return this.http.get(this.baseurl + '/api/vi/workers/list/all/category/workers/');
  }

  getAllWorkers(): Observable<any> {
    return this.http.get(this.baseurl + '/api/vi/workers/list/all/workers/');
  }

  getAllWorkersByCategory(Id: string): Observable<any> {
    return this.http.get(this.baseurl + '/api/vi/workers/list/workers/category/' + Id + '/');
  }

  // tslint:disable-next-line:variable-name
  createCatalog(Id, Name): Observable<any> {
    const body = {parent_id: Id, name: Name};
    return this.http.post(this.baseurl + '/api/vi/workers/create/category/', body);
  }

  createWorkers(Name, Phone, Email, Position, Category): Observable<any> {
    const body = {name: Name, phone: Phone, email: Email, position: Position, category: Category};
    return this.http.post(this.baseurl + '/api/vi/workers/create/workers/', body);
  }

  delWorkers(Id): Observable<any> {
    return this.http.delete(this.baseurl + '/api/vi/workers/item/workers/' + Id + '/');
  }

  delCatalog(Id): Observable<any> {
    return this.http.delete(this.baseurl + '/api/vi/workers/item/category/' + Id + '/');
  }

  putWorkers(Id, Name, Phone, Email, Position, Category): Observable<any> {
    const body = {id: Id, name: Name, phone: Phone, email: Email, position: Position, category: Category};
    return this.http.put(this.baseurl + '/api/vi/workers/item/workers/' + Id + '/', body);
  }

  putCatalog(Id, Parent, Name): Observable<any> {
    const body = {id: Id, parent_id: Parent, name: Name};
    return this.http.put(this.baseurl + '/api/vi/workers/item/category/' + Id + '/', body);
  }
}
