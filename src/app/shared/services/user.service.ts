import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { TicketerUser } from '../models/user/user.model';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  addUser(user: TicketerUser): Observable<TicketerUser> {
    return this.http.post<TicketerUser>(environment.userUrl, user).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(`addUser failed: ${error.message}`);
        return throwError(() => error);
      })
    );
  }
}
