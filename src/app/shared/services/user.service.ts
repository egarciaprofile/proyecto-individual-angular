import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user/user.model';
import { Observable, catchError, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:8080/api/v1/user'

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(`addUser failed: ${error.message}`);
        return throwError(() => error); // Rethrow the actual error object
      })
    );
  }
}
