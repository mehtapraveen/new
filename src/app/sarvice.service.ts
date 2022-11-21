import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { courseinterface } from './courseinterface';

@Injectable({
  providedIn: 'root'
})
export class SarviceService {

  constructor( private _http:HttpClient) { }
  private url= "../assets/database/db.json";
  getstudents():Observable<courseinterface[]>{ 
    return this._http.get<courseinterface[]>(this.url)
  

  .pipe(catchError(this.errorhandler))
  }
  errorhandler(error:HttpErrorResponse){
    return throwError (error.message || "unknown error occured")
  }
}
