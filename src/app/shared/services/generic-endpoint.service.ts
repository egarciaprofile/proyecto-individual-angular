import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericEndpointService<T> {
  private _baseUrl = environment.endpointUrl;

  constructor(private http: HttpClient) {}

  setBaseUrl(entityName: string) {
    this._baseUrl += entityName;
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this._baseUrl);
  }

  getById(id: number): Observable<T> {
    return this.http.get<T>(`${this._baseUrl}/${id}`);
  }

  add(entity: T): Observable<T> {
    return this.http.post<T>(this._baseUrl, entity);
  }

  edit(entity: T): Observable<T> {
    return this.http.put<T>(this._baseUrl, entity);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this._baseUrl}/${id}`);
  }
}
